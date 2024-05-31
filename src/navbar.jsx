import { useState } from 'react';
import './index.css'
import IMDBLogo from './assets/logo.svg';
import dropdown from './assets/language.svg';
import bookmark from "./assets/watchlist.svg";
import userLogo from "./assets/user.svg";
import systemColor from "./assets/light.svg";
import searchLogo from "./assets/search.svg";

import { menuImages } from './menuImages'; 
import { menuItems } from './menuItems';
import MenuDropDown from './menuDropdown';

export default function NavBar() {

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (menu) => {
    setIsHovered(menu);
  }

  const handleMouseLeave = () => {
    setIsHovered(null);
  }
  return (
    <>
      <nav className='flex gap-6 text-[#c3c3c3] bg-black justify-center p-4 items-center'>
        <img src={IMDBLogo} />
        <ul className='flex gap-4'>
          {Object.keys(menuItems).map((items) => (
            <li keys = {items} onMouseEnter={() => handleMouseEnter(items)} onMouseLeave={handleMouseLeave}>
              {items}
            </li>
          ))}
        </ul>

        < div className='flex gap-4 bg-[#1A1A1A] px-3 rounded-lg'>
          <button>All<img src={dropdown} /></button>
          <input className='bg-[#1A1A1A] text-[#797979] p-1' placeholder='Search IMDb'></input>
          <img src={searchLogo} />
        </div>      

        <ul className='flex gap-4'>
          <li><button><img src={bookmark} />Watchlist</button></li>
          <li><button><img src={userLogo}/>User</button></li>
          <li><button>EN<img src={dropdown} /></button></li>
          <li><img src={systemColor}/></li>
        </ul>
      </nav>
      {isHovered && (
        <MenuDropDown content={menuItems[isHovered]} image={menuImages[isHovered]}/>
      )}
    </>
  )
}