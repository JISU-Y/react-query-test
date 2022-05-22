import React from "react"
import axios from "axios"
import { useQueries } from "react-query"

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const DynamicParallel = ({ heroIds }) => {
  // 병렬적으로  query 부를 때 queries를 사용할 수 있다.
  const queryResults = useQueries(heroIds.map((id) => ({ queryKey: ["super-hero", id], queryFn: () => fetchSuperHero(id) })))

  console.log({ queryResults })
  return <div>DynamicParallel</div>
}

export default DynamicParallel
