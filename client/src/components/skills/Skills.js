import React from 'react'
import { skills } from '../../data/data'
import './skills.css'

function Skills() {

  return (
    <div className="skill">
      {skills.map((skill,i) => {
        const {name,icon} = skill
        return( 
          <div key={i} className='skill__container'>
            <div className='skill__card'>
              <div className='skill__icon' >{icon}</div>
              <p  className='skill__title'>{name}</p>
            </div>
          </div>
        )
      })}
    </div>
   )
}

export default Skills