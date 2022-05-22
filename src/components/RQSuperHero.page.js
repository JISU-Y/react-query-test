import React from "react"
import { useParams } from "react-router-dom"
import useSuperHeroData from "../hooks/useSuperHeroData"

const RQSuperHero = () => {
  const { heroId } = useParams()

  const { isLoading, isError, data, error, refetch } = useSuperHeroData(heroId)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h3>RQSuperHero {data?.data.name}'s details</h3>
      <div>{data?.data.alterEgo}</div>
    </div>
  )
}

export default RQSuperHero
