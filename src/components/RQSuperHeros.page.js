import React from "react"
import useSuperHeroData from "../hooks/useSuperHeroData"
// import axios from "axios"
// import { useQuery } from "react-query"

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes")
// }

const RQSuperHeros = () => {
  //   const { status, error, data, refetch } = useQuery(
  //     "super-heroes", // unique key
  //     fetchSuperHeroes, // return a promise 의 함수를 넣는다
  //     {
  //       select: (data) => {
  //         const superHeroNames = data.data.map((hero) => hero.name)
  //         return superHeroNames
  //       },
  //     } // options
  //   )

  const { status, error, data, refetch } = useSuperHeroData()

  if (status === "loading") {
    return <h2>Loading...</h2>
  }

  if (status === "error") {
    return <h2>{error.message}</h2>
  }

  // 일단 rq 사용하면 코드가 간단해진다.

  return (
    <div>
      <h2>RQSuperHeros</h2>
      <button onClick={refetch}>fetch Heroes</button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })} */}
      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </div>
  )
}

export default RQSuperHeros
