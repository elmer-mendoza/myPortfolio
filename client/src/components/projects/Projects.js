import React,{useState} from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdLanguage} from 'react-icons/md'
import {
Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle
} from 'reactstrap';
import { FaLinkedin } from 'react-icons/fa';
import './projects.scss'
import Loading from "../loading/Loading";


const  Project=({project}) => {

    const [readMore, setReadMore] = useState(false);
    const {id,title,category,img,desc,githubLink,website} = project;

    return (
        <Card className={readMore?'project card' : 'project'} onMouseLeave={() => setReadMore(false)}>
            <div key={id} className="project__card-img">
                <CardImg top  src={img} alt="project image" />
                <p className="project__source-link">
                    <a href={website}><i><MdLanguage /></i></a>
                    <a href={githubLink}><i><FaGithub /></i></a>
                    <a href="https://www.linkedin.com/in/elmer-mendoza/"><i><FaLinkedin /></i></a>
                </p>
            </div>  
            <CardBody className='project__body'>
                <CardTitle tag="p"><a className='project__title' href={website}>{title}</a></CardTitle>
                <CardSubtitle tag="p" className="mb-3 text-muted font-weight-light">{category}</CardSubtitle>
                <CardText>
                    <p className='project__desc'>
                        {readMore ? desc : `${desc.substring(0, 60)}`}
                        <button className="text-primary" onClick={() => setReadMore(!readMore)}>
                            {readMore ? '  ...show less' : '  ...read more'}
                        </button>
                    </p>
                </CardText>
            </CardBody>
        </Card>
    )
}


const Projects = ({projects,loading,error}) => {
   

    if(loading) {return <Loading/>}
    
  return (
    <div  id="projects" className="projects sectionContainer" >
        <h2 className='sectionTitle' >Projects</h2>
        <div  className="projects__cards ">
            {projects?.map((project,index) => {
                return(
                    <Project key={index} project={project}/>
                )
            })} 
        </div>
    </div> 
    
  );  
};

export default Projects;