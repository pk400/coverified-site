import React from 'react'

import './Navbar.css'

const Navbar = ({
  children,
  logoSrc,
  fixed=false
}) => {
  const customStyles = {
    margin: '30px'
  }
  return (
    <div className={'top-nav' + (fixed ? ' fixed' : '')}>
      <div style={customStyles}>
        <img src={logoSrc} />
      </div>
      <nav className='links' style={customStyles}>
        <ul>
          {children.map((navbarLink, i) =>
            <li key={i}>{navbarLink}</li>)}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
