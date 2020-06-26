import React from 'react'

import './Button.css'

const Button = ({
  type='button',
  text
}) => {
  return <button className='button' type={type}>{text}</button>
}

export default Button
