import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date='2004 - 2009'
      iconStyle={{background:'#3e497a', color:'#fff'}}
      icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>
        Kiev Polytechnic University,Kiev-Ukraine 
        </h3>
        <p>Master in Telecommunication System and Networks</p>
      </VerticalTimelineElement>  

      <VerticalTimelineElement 
      className='vertical-timeline-element--education' 
      date='2018'
      iconStyle={{background:'#3e497a', color:'#fff'}}
      icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>
        Prog.Ua Programming Institute
        </h3>
        <p>Junior Java Programmer</p>
      </VerticalTimelineElement> 

      <VerticalTimelineElement 
      className='vertical-timeline-element--work' 
      date='01.03.2018 – 30.03.2019'
      iconStyle={{background:'#e9d35b', color:'#fff'}}
      icon={<WorkIcon/>}
      >
        <h2 className='vertical-timeline-element-title'>
        Web Developer – Highbits De Latinoamerica SA.
        </h2>
        <h3 className='vertical-timeline-element-subtitle'>
        Tuxtla Gutierrez, Chiapas, Mexico
        </h3>
        <p>Development and maintenance of a fitness studio website. Technologies used Html, css, Boostrap 4.</p>
      </VerticalTimelineElement>  

      <VerticalTimelineElement 
      className='vertical-timeline-element--work' 
      date='01.03.2018 – 30.03.2019'
      iconStyle={{background:'#e9d35b', color:'#fff'}}
      icon={<WorkIcon/>}
      >
        <h2 className='vertical-timeline-element-title'>
        Web Developer – Well Spoken Interpreting 
        </h2>
        <h3 className='vertical-timeline-element-subtitle'>
        – Washington, United States
        </h3>
        <p>Development and maintenance of Interpreting company website. Technologies Wordpress, Boostrap 4.</p>
      </VerticalTimelineElement>  

      <VerticalTimelineElement 
      className='vertical-timeline-element--work' 
      date='01.03.20213 - 30.03.2021'
      iconStyle={{background:'#e9d35b', color:'#fff'}}
      icon={<WorkIcon/>}
      >
        <h2 className='vertical-timeline-element-title'>
        Web Developer 
        </h2>
        <h3 className='vertical-timeline-element-subtitle'>
        Kyiv – Ukraine
        </h3>
        <p>Development and maintenance E-Commerce company website in process. Technologies Javascript,React.js.</p>
      </VerticalTimelineElement>  

      <VerticalTimelineElement 
      className='vertical-timeline-element--work' 
      date='01.09.2019 – 20.02.2022 '
      iconStyle={{background:'#e9d35b', color:'#fff'}}
      icon={<WorkIcon/>}
      >
        <h2 className='vertical-timeline-element-title'>
        Spanish Teacher – American International School and University 
        </h2>
        <h3 className='vertical-timeline-element-subtitle'>
        Kyiv – Ukraine
        </h3>
        <p>IB Spanish Teacher</p>
      </VerticalTimelineElement>


       
      </VerticalTimeline>
      </div>
  )
}

export default Experience