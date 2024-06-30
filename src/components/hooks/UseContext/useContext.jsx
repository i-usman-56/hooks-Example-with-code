import React from 'react'
import Profile from './components/Profile'
import Contact from './components/contact'
import Footer from './components/footer'

export default function UseContext() {
    const name="Muhammad Usman"
    const phone="(214) 838-1023"
    const account="0112 2546 4789 2567"
  return (
    <div className='flex flex-col justify-center'>
      <Profile name={name} phone={phone} account={account}/>
      <Footer  name={name} phone={phone} account={account} />
    </div>
  )
}
