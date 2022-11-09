import React, { useState} from 'react';
import  { Container,Row,Col } from 'reactstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Loading from "../loading/Loading";
import './experiences.css'


const JobInfo =(props) =>{
  const { company, dates, duties, title } = props.jobs[props.value]
  return (
    <div className="job-info">
      <h3>{title}</h3>
      {company}
      <p className="job-date">{dates}</p>
      {duties?.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}


function Experiences({jobs,loading,error}) {

  const [value, setValue] = useState(0)
  const resumeDownload ="https://drive.google.com/file/d/12rosUhbwG4a_2jFwQiqnapPNkB8NYrrD/view?usp=sharing"

  if(loading){ return <Loading/>} 

  return (
    <div id='experience' className='experiences sectionContainer'>
      <div className="title pt-3 my-3  sectionTitle">
        <h2>experience</h2>
        <p>
          <a href={resumeDownload}>Download Resume Here</a>
        </p>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs?.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`} >
                {job.company}
              </button>
            )
          })}
        </div>
        {jobs && <JobInfo  jobs={jobs} value={value}/>}
      </div>
    </div>
  )
}

export default Experiences
