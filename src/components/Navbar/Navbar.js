import React from 'react'

import './Navbar.css'

const Navbar = ({
  children,
  logoSrc,
  fixed=false
}) => {
  return (
    <div className={'top-nav' + (fixed ? ' fixed' : '')}>
      <div className='navbar-logo'>
        <img src={logoSrc} alt='CoVerified logo' />
      </div>
      <nav className='links'>
        <ul>
          {children.map((navbarLink, i) =>
            <li key={i}>{navbarLink}</li>)}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
