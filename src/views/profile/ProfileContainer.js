import React, { useLayoutEffect, useState } from 'react'
import './ProfileStyle.scss'
import Header from 'views/partials/header'
import UserProfile from './components/UserProfile'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile } from './ProfileApi'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const [userList, setUserList] = useState()
  const userProfile = useSelector((state) => state.profile.userProfile)
  const { id } = useParams()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(getUserProfile(id))
  }, [])

  return (
    <React.Fragment>
      <Header />
      <UserProfile data={userProfile.data} ad={userProfile.ad} />
    </React.Fragment>
  )
}

export default Profile
