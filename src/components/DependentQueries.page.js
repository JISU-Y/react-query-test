import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUserByEmail(email))
  const channelId = user?.data.channelId
  const { data: courses } = useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId, // channelId가 있을 떄만 query를 동작시키도록 한다.
  })

  //   console.log(user)
  //   console.log(courses)
  return <div>DependentQueries</div>
}

export default DependentQueries
