import React from 'react'

import './RoundedImage.css'

const RoundedImage = ({width, src}) => {
  return (
    <div className='image-container'>
      <img src={src} width={width} alt='Team member picture' />
    </div>
  )
}

export default RoundedImage
