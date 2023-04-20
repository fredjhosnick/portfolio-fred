import React from 'react'
import { useParams,Link } from 'react-router-dom'
import ProjectList from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/ProjectDisplay.css'

const ProjectDisplay = () => {
 const{id} = useParams();
 const project = ProjectList[id];

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <Link to={project.email} target='_blank'><img src={project.image} /></Link>
        <p>{project.skills}</p>
        <Link to={project.github} target='_blank'><GitHubIcon/></Link>
        
    </div>
  )
}

export default ProjectDisplay