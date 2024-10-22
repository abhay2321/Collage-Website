/* eslint-disable no-unused-vars */
import React from 'react'
import './Programs.css'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img1icon from '../../assets/icon1.png'
import img2icon from '../../assets/icon2.png'
import img3icon from '../../assets/icon3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={img1} alt=''/>
            <div className="caption">
                <img src={img1icon} alt=''/>
                <p>Gradution Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={img2} alt=''/>
            <div className="caption">
                <img src={img2icon} alt=''/>
                <p>Master Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={img3} alt=''/>
            <div className="caption">
                <img src={img3icon} alt=''/>
                <p>Post Degree</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
