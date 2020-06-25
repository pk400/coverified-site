import React from 'react'

import './NavbarLink.css'

const NavbarLink = ({
  text,
  href,
  selected=false
}) => {
  return (
    <div className={'navbar-link' + (selected ? ' selected' : '')}>
      <a href={href}>{text}</a>
    </div>
  )
}

export default NavbarLink
