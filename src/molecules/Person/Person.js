import React from 'react'

import './Person.css'

import RoundedImage from '../../atoms/RoundedImage/RoundedImage'

const Person = ({
  name,
  imageSrc,
  position,
  description
}) => {
  return (
    <div className='person-card'>
      <RoundedImage width={200} src={imageSrc} />
      <div>
        <span className='name'>{name}</span>
      </div>
      <div>
        <span className='position'>{position}</span>
      </div>
      <div>
        <span className='description'>{description}</span>
      </div>
    </div>
  )
}

export default Person
