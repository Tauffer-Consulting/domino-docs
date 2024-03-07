import React from 'react'
import { Icon } from '@iconify/react'
import "./index.css"

interface Props {
  isOpen: boolean
  size: number
  toggle: React.Dispatch<React.SetStateAction<boolean>>
  menuItems: {
    label: string;
    link: string;
  }[]
}

export const Hamburger: React.FC<Props> = ({ isOpen, size, toggle, menuItems }) => {

  const handleIconClick = () => {
    toggle(!isOpen);
  };

  return (
    <div id="hamburger" onClick={handleIconClick}>
      <Icon icon="ic:baseline-menu" fontSize={size} />
      <div className={isOpen ? 'menu' : 'menu close'}>
        {menuItems.map(({ label, link }) => (
          <div className="menuitem">
            <a href={link}>{label}</a>
          </div>
        ))}
      </div>
    </div>
  );
};
