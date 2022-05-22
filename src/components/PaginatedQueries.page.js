import React from "react"
import { useState } from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, isError, error, data, isFetching } = useQuery(["colors", pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData: true, // page 넘어갈 때마다 새로 query 를 요청하는 것이기 때문에 isLoading이 계속 toggle 됨
    // 그러면 여러 줄의 데이터의 경우 계속 스피너가 등장하므로 보기 안좋을 수 있다
    // 그래서 다음 query를 요청할 때에는 기존의 데이터를 유지하는 것으로 한다.
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={() => setPageNumber((page) => page - 1)} disabled={pageNumber === 1}>
          Prev Page
        </button>
        <button onClick={() => setPageNumber((page) => page + 1)} disabled={pageNumber === 4}>
          Next Page
        </button>
      </div>
      {isFetching && "Loading"}
    </>
  )
}
