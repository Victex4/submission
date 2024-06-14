import React from 'react'

const Dashboard = () => {

    const currentUser = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
        <div className='flex items-center justify-center flex-col font-bold text-[32px] gap-16'>
            <p>First Name: {currentUser.firstName} </p>
            <p>Last Name: {currentUser.lastName} </p>
            <p>Email: {currentUser.email} </p>
        </div>
    </div>
  )
}

export default Dashboard
