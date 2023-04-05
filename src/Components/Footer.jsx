import React from 'react'
import '../Styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Foot = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/>
        <FacebookIcon />
        <LinkedInIcon/>
        </div>
      <p>@Fred Rios</p>
    </div>
  )
}

export default Foot