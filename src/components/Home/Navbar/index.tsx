import React, { useMemo, useState } from 'react'
import "./index.css"
import { Hamburger } from './Hanburger';
import { Icon } from '@iconify/react'
import { useWindowDimensions } from '@site/src/utils/useWindowSize';

export const Navbar = () => {
  const { width } = useWindowDimensions();
  const menuItems = useMemo(() => {
    return [
      { label: "Documentation", link: "#session-1" },
      { label: "Blog", link: "#session-2" },
      { label: "Gallery", link: "#session-3" },
      { label: "About us", link: "#" },
    ]
  }, [])

  return (
    <>
      {width <= 1144 ? (
        <nav id="navbar-small">
          <img id="logo" src="brand/png/main_logo.png" alt="Logo" />
          <Hamburger
            menuItems={menuItems}
            buttonsItems={
              [<button id="primary">
                Try cloud
              </button>,
              <button id="secondary">
                Contact
              </button>,
              <a id="github">
                Github <Icon icon="fa-brands:github" fontSize={36} />
              </a>
              ]}
          />
        </nav>
      ) : (
        <nav id="navbar">
          <img id="logo" src="brand/png/main_logo.png" alt="Logo" />

          <ul id="central-links">
            {menuItems.map(({ label, link }) =>
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
      )}
    </>
  )
}
