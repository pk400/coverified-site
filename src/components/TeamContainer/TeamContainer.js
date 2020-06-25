import React from 'react'

import './TeamContainer.css'

const TeamContainer = ({children}) => {
  return (
    <div className='team-container'>
      {children.map(child => child)}
    </div>
  )
}

export default TeamContainer
