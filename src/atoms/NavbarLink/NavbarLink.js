import React from 'react'

import './NavbarLink.css'

const NavbarLink = ({
  text,
  onClick,
  selected=false
}) => {
  return <button
    className={'navbar-link' + (selected ? ' selected' : '')}
    onClick={onClick}>{text}</button>
}

export default NavbarLink
