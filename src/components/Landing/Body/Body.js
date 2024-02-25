import React from 'react'
import hiring from '../assests/recruit1.png';
import './body.css';
import { Link } from 'react-router-dom';
const Body = () => {
  return (
   <div className='body-main'>
    <div className='body-main-container'>
     <div className='text-content'>
      <h1>Unlock Your <span style={{color:'#247bf7'}}>Career Potential</span> Today!</h1>
      <p>Revolutionizes job hunting and recruitment with a user-friendly platform. Seamlessly connect job seekers with employers, featuring an advanced resume processing module for enhanced insights. Elevate your career journey effortlessly with RecruitHub! Apply now for a smoother path to your dream job.</p>
       <div className='body-btn'>
       <Link 
       style={{
       textDecoration:'none',
       textTransform: 'capitalize',
       fontWeight: 400,
       fontSize: 'calc(1rem + 0.2vw)',
       color:'#fff',
       backgroundColor: '#247BF7',
       border: '1px solid #247BF7',
       padding: 'calc(5px + 0.15vw) calc(15px + 0.3vw)',
       borderRadius: '6px',
       transition: 'all 0.3s ease-in 0s'
    
       }} to='/login'>Apply Now</Link>
       </div>
     </div>
     <div className='image-content'>
         <img src={hiring} alt='hiring'/>
     </div>
    </div>
    </div>
  )
}

export default Body;
