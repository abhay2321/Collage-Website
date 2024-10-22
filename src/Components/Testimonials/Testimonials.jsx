/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./Testimonials.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaCircleRight } from "react-icons/fa6";
import abhay from "../../assets/abhay.jpg";
import ayushi from "../../assets/ayushi.jpg";
import isha from "../../assets/isha.jpg";
import ankit from "../../assets/ankit.jpg";
import govind from "../../assets/govind.jpg";
import javed from "../../assets/javed.jpg";

const Testimonials = () => {

  const slider = useRef();
  let tx = 0; 

  const slideForward = () => {
       if(tx > -55){
          tx -= 17;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBack = () => {
    if(tx < 0){
      tx += 17;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <div className="next-btn" onClick={slideForward}>
        <FaCircleRight />
      </div>
      <div className="back-btn"  onClick={slideBack}>
        <FaArrowAltCircleLeft />
      </div>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={abhay} alt="user1" />
                <div>
                  <h3>Abhay Chaurasia</h3>
                  <span>IET, Khandari</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at IET was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence heve truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={ayushi} alt="user1" />
                <div>
                  <h3>Ayushi Verma</h3>
                  <span>IET, Khandari</span>
                </div>
              </div>
              <p>
                IET offers a robust and comprehensive curriculum that covers a
                wide range of engineering disciplines, ensuring that students
                are well-prepared with both foundational knowledge and
                specialized skills.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={isha} alt="user1" />
                <div>
                  <h3>Isha Chaudhary</h3>
                  <span>IET, Khandari</span>
                </div>
              </div>
              <p>
                The placement cell at IET is highly proactive in preparing
                students for the job market, offering training in resume
                writing, interview skills, and providing ample placement
                opportunities with top engineering firms.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={ankit} alt="user1" />
                <div>
                  <h3>Ankit Chaubey</h3>
                  <span>IET, Khandari</span>
                </div>
              </div>
              <p>
                The collaborative environment at IET encourages teamwork,
                critical thinking, and innovation, with faculty and peers
                supporting each other in academic and extracurricular pursuits.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={govind} alt="user1" />
                <div>
                  <h3>Govind Chaubey</h3>
                  <span>IET, Khandari</span>
                </div>
              </div>
              <p>
                With its excellent academic reputation and industry connections,
                IET has provided me with the tools, experiences, and networking
                opportunities necessary to prepare for a successful career after
                graduation.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={javed} alt="user1" />
                <div>
                  <h3>Javed Malik</h3>
                  <span>IET, Khandari</span>
                </div>
              </div>
              <p>
                The decision to study at IET has provided me access to
                world-class learning resources and a dynamic academic atmosphere
                that has greatly enhanced my educational journey.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
