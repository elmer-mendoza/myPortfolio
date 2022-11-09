
import Skills from '../skills/Skills'
import './heroSection.css'
import {SiLinkedin,SiGithub,MdLanguage} from 'react-icons/si';

function HeroSection() {


  return (
    <div className='hero'  >
      <div className='hero__name'>
        <h1>elmermendoza </h1>
      </div>
      <div className='hero__verticalLine'/>
      <Skills/>

    </div>
  )
}

export default HeroSection



