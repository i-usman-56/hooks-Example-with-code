import React, { useContext } from 'react'
import { dataContext } from '../../../../context/context'

function Footer({name,phone,account}) {
    const {name1,mobile,title}=useContext(dataContext)
  return (
    <div className='mt-[145px]'>
        <h1>Footer Component</h1>
        <p>Name :{name}</p>
      <p>Phone No : {phone} </p>
        <p>Bank Account: {account} </p>

        <div>
      <h1>Data From ContextWith Out Props</h1>
      <p>NAme :{name1}</p>
      <p>{mobile}</p>
      <p>{title}</p>
      </div>
    </div>
  )
}

export default Footer
