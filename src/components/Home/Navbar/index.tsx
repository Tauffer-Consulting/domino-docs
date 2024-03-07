import React, { useMemo, useState } from 'react'
import "./index.css"
import { Hamburger } from './Hanburger';
import { Icon } from '@iconify/react'

export const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);

  const menuItems = useMemo(()=>{
    return [
      {label:"Documentation", link:"#session-1"},
      {label:"Blog", link:"#session-2"},
      {label:"Gallery", link:"#session-3"},
      {label:"About us", link:"#"},
    ]
  },[])


  return (
    <nav id="navbar">
      <img id="logo" src="brand/png/main_logo.png" alt="Logo" />

      <Hamburger 
        isOpen={isOpen} 
        size={36} 
        toggle={setIsOpen} 
        menuItems={menuItems}
      />

      <ul id="central-links">
        {menuItems.map(({label,link})=>
          <li>
            <a href={link}>
              {label}
            </a>
          </li>
        )}
      </ul>
      <ul id="right-buttons">
        <li>
          <button id="primary">
            Try cloud
          </button>
        </li>
        <li>
          <button id="secondary">
            Contact
          </button>
        </li>
        <li>
          <a id="github">
            <Icon icon="fa-brands:github" fontSize={36} />
          </a>
        </li>
      </ul>
    </nav>
  )
}
