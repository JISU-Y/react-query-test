import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

// const fetchSuperHero = (id) => {
//   return axios.get(`http://localhost:4000/superheroes/${id}`)
// }

const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1] // useQuery 함수의 첫번째 인자로 전달했던 유니크 키를 자동으로 받아올 수 있음
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}

const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient() // queryClient 인스턴스 생성
  //   return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId))
  return useQuery(["super-hero", heroId], fetchSuperHero, {
    initialData: () => {
      // queryClient를 provider로 받고 있기때문에 useQueryClient 사용 가능
      // queryClient의 getQueryData에서 super-heroes 키를 가지는 데이터 가져옴
      const hero = queryClient.getQueryData("super-heroes")?.data?.find((hero) => hero.id === Number(heroId))
      // ra-heroes에서 이미 heroes 목록 다 가져왔으니까
      // 이미 가져온 데이터에서 id만 가지고 initialData 설정해서 fetching을 백그라운드에서 해버린다?

      if (hero) {
        return {
          data: hero,
        }
      } else {
        return undefined
      }
    },
  })
}

export default useSuperHeroData
