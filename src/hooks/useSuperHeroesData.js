import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes", // unique key
    fetchSuperHeroes, // return a promise 의 함수를 넣는다
    {
      onSuccess,
      onError,
      //   select: (data) => {
      //     const superHeroNames = data.data.map((hero) => hero.name)
      //     return superHeroNames
      //   },
    } // options
  )
}

export default useSuperHeroesData
