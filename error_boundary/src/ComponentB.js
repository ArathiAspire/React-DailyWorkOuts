import React from 'react'

const ComponentB = () => {
    if(Math.random()<0.5){
        throw new Error('Error in ComponentB')
    }
  return (
    <div>
      <h2>ComponentB</h2>
    </div>
  )
}

export default ComponentB
