import React, { useCallback, useMemo, useState } from 'react'
import "./index.css"
import { Hamburger } from './Hanburger';
import { Icon } from '@iconify/react'

export const Navbar = () => {
  const menuItems = useMemo(() => {
    return [
      { label: "Documentation", link: "/docs/intro" },
      { label: "Blog", link: "/blog" },
      { label: "Gallery", link: "/gallery" },
      { label: "About us", link: "#contact" },
    ]
  }, [])

  const handleClickCloud = useCallback(() => {
    window.open("https://domino-workflows.cloud/sign-in", "_blank")
  }, [])

  const handleClickContact = useCallback(() => {
    window.location.href = "#contact"
  }, [])

  return (
    <>
      <nav id="navbar-small">
        <img id="logo" src="brand/png/main_logo.png" alt="Logo" />
        <Hamburger
          menuItems={menuItems}
          buttonsItems={
            [<button id="primary" onClick={handleClickCloud}>
              Try cloud
            </button>,
            <button id="secondary" onClick={handleClickContact}>
              Contact
            </button>,
            <a id="github" href="https://github.com/Tauffer-Consulting/domino" target='_blank' >
              Github <Icon icon="fa-brands:github" fontSize={36} />
            </a>
            ]}
        />
      </nav>
      <nav id="navbar">
        <img id="logo" src="brand/png/main_logo.png" alt="Logo" />

        <ul className='ul' id="central-links">
          {menuItems.map(({ label, link }) =>
            <li className='li'>
              <a href={link}>
                {label}
              </a>
            </li>
          )}
        </ul>
        <ul id="right-buttons" className='ul'>
          <li className='li'>
            <button id="primary" onClick={handleClickCloud}>
              Try cloud
            </button>
          </li>
          <li className='li'>
            <button id="secondary" onClick={handleClickContact}>
              Contact
            </button>
          </li>
          <li className='li'>
            <a id="github" href="https://github.com/Tauffer-Consulting/domino" target='_blank' >
              <Icon icon="fa-brands:github" fontSize={36} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
