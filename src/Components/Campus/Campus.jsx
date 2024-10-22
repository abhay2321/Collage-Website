/* eslint-disable no-unused-vars */
import React from 'react'
import './Campus.css'
import { FaCircleArrowRight } from "react-icons/fa6";

import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.jpg'
import gallery_5 from '../../assets/gallery_5.jpg'
import gallery_6 from '../../assets/gallery_6.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt=''/>
            <img src={gallery_3} alt=''/>
            <img src={gallery_5} alt=''/>
            <img src={gallery_4} alt=''/>
            {/* <img src={gallery_2} alt=''/> */}
            {/* <img src={gallery_6} alt=''/> */}
        </div>
        <button className='btn dark'>See more here <FaCircleArrowRight /></button>
    </div>
  )
}

export default Campus
