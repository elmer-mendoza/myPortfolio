import { useState } from "react";

import NavMenu from "../nav/NavMenu";
import './header.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'

function Header() {

    const[showMenu, setShowMenu] =useState(false)
    const[willShow, setWillShow] =useState("")
      
    const handleShowMenu = (e) => {
      // e.target.classList.toggle('bg')
      console.log("leave")
      setShowMenu(prev=>!prev)
      setWillShow(showMenu ? "" : "show") 
    }

  return (
    <div className="header">
      <p className="header__logo">elmermendoza</p>
      <div className="header__menu" >
        {showMenu ? 
          <>
            <CgClose className="closeMenu" onClick={handleShowMenu}/>
            <NavMenu handleShowMenu={handleShowMenu}/>
          </> :
          <GiHamburgerMenu className="hamburger" onClick={handleShowMenu}/>
        }
      </div>
    </div>
  )
}

export default Header