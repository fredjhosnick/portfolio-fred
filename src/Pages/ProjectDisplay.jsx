import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectList from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/ProjectDisplay.css'

const ProjectDisplay = () => {
 const{id} = useParams();
 const project = ProjectList[id];

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p>{project.skills}</p>
        <GitHubIcon/>
    </div>
  )
}

export default ProjectDisplay