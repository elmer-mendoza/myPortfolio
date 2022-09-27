import React from 'react'
import { AiFillAccountBook ,AiOutlineArrowLeft} from "react-icons/ai"

function ShowMenu({submenus,title}) {
  
  return (
    <div className="subMenu">

      <h4 className='subMenu__title'>{title}
        <span className='subMenu__arrowIcon'>
          <AiOutlineArrowLeft/>
        </span>
      </h4>

      {submenus.map((submenu,i) => {
      const {title} = submenu
      return(
        <div key={i} className='navMenu__container'>
          <p  className='navMenu__title'>
            <span className='navMenu__icon'>
              <AiFillAccountBook />
            </span>{title}
          </p>
          {/* {submenus?.submenus ? <ShowMenu submenus={menu.submenus} title={title}/> : null} */}
        </div>
        )
       })}
   
    </div>
  )
}

export default ShowMenu