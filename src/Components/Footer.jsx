import React from 'react'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Foot = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link> <InstagramIcon/> </Link>
        <Link><FacebookIcon /> </Link>
        <Link to="https://www.linkedin.com/in/fred-rios-ab2ba0168/"target='_blank'><LinkedInIcon/> </Link>
        </div>
      <p>@Fred Rios</p>
    </div>
  )
}

export default Foot