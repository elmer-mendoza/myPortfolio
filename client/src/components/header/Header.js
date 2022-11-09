import { useState,useEffect } from "react";

import NavMenu from "../nav/NavMenu";
import './header.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import {SiLinkedin,SiGithub,MdLanguage} from 'react-icons/si';

function Header() {

    const[showMenu, setShowMenu] =useState(false)
    const[willShow, setWillShow] =useState("")
    const [headerBgColor,setHeaderBgColor] = useState(false)
  
    const handleScrollYDistance =(scrollTop) => {
     (scrollTop > 20) ? setHeaderBgColor(true) : setHeaderBgColor(false)
    }

    const handleShowMenu = (e) => {
      // e.target.classList.toggle('bg')
      console.log("leave")
      setShowMenu(prev=>!prev)
      setWillShow(showMenu ? "" : "show") 
    }

    useEffect(() => { 
      window.onscroll = () => {
      const scrollTop = window.scrollY
      handleScrollYDistance(scrollTop);
     }}, []);


  return (
    <div className={headerBgColor? "header color" : "header"} >
      <p className="header__logo"> elmermendoza
        <div>
          <a href="https://www.linkedin.com/in/elmer-mendoza/"><i><SiGithub /></i></a>
          <a href="https://www.linkedin.com/in/elmer-mendoza/"><i><SiLinkedin/></i></a>
        </div>
      </p>
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