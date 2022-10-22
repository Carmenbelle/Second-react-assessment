import React from 'react'
import { useNavigate } from 'react-router-dom'

const UsersId = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>
        Greetings, here is your user id
    </div>
    <button onClick={() => navigate(-1)}>Home</button>
    </>
  )
}

export default UsersId