import React from 'react'
import { useHistory } from 'react-router-dom'

const DataList = ({ data }) => {
  const history = useHistory()
  return (
    <div className='container'>
      {data &&
        data.length &&
        data.map((item) => {
          return (
            <div
              className='userDetailsBox'
              onClick={() => history.push(`/profile/${item.id}`)}
            >
              <img src={item.avatar} />
              <div>{item.first_name}</div>
            </div>
          )
        })}
    </div>
  )
}

export default DataList
