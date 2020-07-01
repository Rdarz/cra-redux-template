import React from 'react'

const UserProfile = ({ data, ad }) => {
  return (
    <div className='container'>
      {data && (
        <div className='profile'>
          <img src={data.avatar} />
          <div>
            <p>
              <div>{`${data.first_name} ${data.last_name} (${ad.company})`}</div>
              <div>{`${data.email}`}</div>
            </p>
            <p>{ad.text}</p>
            <p>Link: {ad.url}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile
