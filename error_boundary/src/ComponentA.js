import React from 'react'

const ComponentA = () => {
    if(Math.random()<0.5){
        throw new Error('Error in ComponentA')
    }
  return (
    <div>
      <h2>ComponentA</h2>
    </div>
  )
}

export default ComponentA
