import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import "./index.css"

interface Props {
  menuItems: {
    label: string;
    link: string;
  }[]
  buttonsItems: React.ReactElement[] | string[];
}

export const Hamburger: React.FC<Props> = ({ menuItems, buttonsItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="menu-button" onClick={toggleMenu}>
        <Icon icon="ic:baseline-menu" fontSize={36} />
      </button>
      {isOpen && (
        <>
          <div className="menu-list" ref={menuRef}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
              {buttonsItems.length && (<div className='divider'></div>)}
              {buttonsItems.length && buttonsItems.map(b => (
                <li>
                  {b}
                </li>
              ))}
            </ul>
          </div>

        </>
      )}
    </div>
  );
};
