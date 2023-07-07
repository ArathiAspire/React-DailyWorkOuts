import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = (props) => {
  return (
    <div>
      {props.message}
    </div>
  )
}
MyComponent.propTypes={
    message:PropTypes.string.isRequired,
}
export default MyComponent
