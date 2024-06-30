import React from 'react'
import Contact from './contact'

function Profile({name,phone,account}) {
  return (
    <div>
      <h1>Profile Component</h1>
      <Contact name={name} phone={phone} account={account}/>
    </div>
  )
}

export default Profile
