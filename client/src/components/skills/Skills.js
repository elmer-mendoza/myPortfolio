import React,{useEffect, useState} from 'react'
import { skills } from '../../data/data'
import './skills.css'
import { motion,AnimatePresence } from "framer-motion"



const Card =({skill}) =>{
  const {name,icon} =skill
  return(
    <motion.div className='skill__card'
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:3}}
    layout >  
      <div className='skill__icon' >{icon}</div>
      <p  className='skill__title'>{name}</p>
    </motion.div>
  )
}

function Skills() {
  const [toggle,setToggle] =useState(false)
  const [index,setIndex] =useState(1)
  const [filteredSkills,setFilteredSkills] =useState(skills)

  // const stacks =["full","full","full",]
  const stacks =["full","front","back",]
  const stackName =["Backend","Fullstack","Frontend"]
  let stack=stackName[index]

  const handleIndex =() => {
    const filterSkills = skills.filter((skill) => skill.stack.includes(stacks[index]))
    setFilteredSkills(filterSkills)
    index >= 2 ?  setIndex(0) : setIndex(prev=>prev+1)
    setToggle(prev =>!prev)
  }

  useEffect(()=>{
     const timer= setInterval(()=>{
      handleIndex() 
      },5000)
    return () => clearInterval(timer)
  },[filteredSkills])

  
  return (
    <div className="skill" >
      <p className="skill__stackTitle label" >Skills</p>
      <p className={toggle ? "skill__stackTitle rotate" : "skill__stackTitle"} onClick={handleIndex}>{stack}</p>
      <div className="skill__container" onClick={handleIndex}>
        <motion.div className='skill__items' >
          <AnimatePresence >
            {filteredSkills.map((skill) => {
              return( 
                <Card skill={skill}/>
              )
            })}
          </AnimatePresence >
        </motion.div>
      </div>
    </div>
   )
}

export default Skills