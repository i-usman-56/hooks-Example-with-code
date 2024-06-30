import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffect() {
    useEffect(()=>{
        debugger
        console.log("UseEffect Called.......")
        console.log(window.innerHeight)
    },[])
    useLayoutEffect(()=>{
        debugger
        console.log("useLayoutEffect Called.......");
        console.log(window.innerWidth)
    },[])
  return (
    <div>
      <h1>Use Layout Effect </h1>
    </div>
  )
}
