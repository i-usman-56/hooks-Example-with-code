import React, { memo } from 'react'

const Component=({onChange})=> {
    console.log("component Render");
  return (
    <div>
      <h1>Component </h1>
    </div>
  )
}
export default memo(Component)