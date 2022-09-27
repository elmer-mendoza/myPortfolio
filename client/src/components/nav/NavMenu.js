import './navMenu.css';
import {menus} from '../../data/data'
import ShowMenu from './ShowMenu';


function NavMenu({handleShowMenu}) {

  // const handleShowSubMenu = (e,i) => {
  //   const node = document.querySelectorAll("div.subMenu")
  //   console.log("node",node)
  //   const subMenu = node[i].classList.toggle("show")
  //   console.log("subMenu",subMenu)
  //   e.preventDefault()
  // }

  return (
    <div className="navMenu" onMouseLeave={handleShowMenu}>
      {menus.map((menu,i) => {
        const {title,link,icon} = menu
        return( 
          <div key={i} className='navMenu__container main' >
           <p  className='navMenu__title'><span className='navMenu__icon'>{icon}</span>{title}</p>
           {menu?.submenus ? <ShowMenu submenus={menu.submenus} title={title}/> : null}
          </div>
        )
      })}
    </div>
   )
}

export default NavMenu