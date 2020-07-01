import React, { useLayoutEffect, useState } from 'react'
import './HomeStyle.scss'
import Header from 'views/partials/header'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails } from './HomeApi'
import DataList from './components/DataList'

const Home = () => {
  const [userList, setUserList] = useState()
  const userData = useSelector((state) => state.home.userDetails)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(getUserDetails())
  }, [])

  return (
    <React.Fragment>
      <Header />
      <DataList data={userData && userData.data} />
    </React.Fragment>
  )
}

export default Home
