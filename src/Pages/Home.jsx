import React from 'react'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/House.css'



const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Fred</h2>
        <div className='prompt'>
          <p>A software  developer with a  passion for learning and creating</p> 
       <Link to="https://www.linkedin.com/in/fred-rios-ab2ba0168/"target='_blank'><LinkedInIcon /></Link>   
       <Link ><EmailIcon/></Link>
       <Link to="https://github.com/fredjhosnick?tab=repositories"target='_blank'><GitHubIcon/></Link>

        </div>
      </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>
                ReactJS,JavaScript HTML,CSS,NPM, BootStrap, MaterialUI,StyledComponent
              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>JAVA, MySQL</span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>Spanish, Russian,Portuguese, English, German </span>
            </li>

          </ol>
        </div>
      
      
      
    </div>
  )
}

export default Home