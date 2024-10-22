 
import React from 'react'
import './Contact.css'
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { FcPhone } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", 
        "fb2bda5a-6577-47c4-b336-85345bbcc57b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        event.target.reset();
      }
    };

  return (
    <div className='contact'>
         <div className="contact-col">
            <h3>Send us a message <BiSolidMessageRoundedDetail /></h3>
            <p>Feel free to reach out through contact from or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to our 
                university community.
            </p>
            <ul className='contactinf'>
                <li> <IoMail /> abhayChaurasia122004@gmail.com</li>
                <li> <FcPhone /> +91 9305505053</li>
                <li> <FaLocationDot className='location'/> Khandari Campus, Agra </li>
                <li className='loc'> Uttar Pradesh 282002</li>
            </ul>
         </div>
         <div className="contact-col">
             <form onSubmit={onSubmit}>
                 <label>Your name</label>
                 <input type="text" name="name" placeholder='Enter your name'required/>
                 <label>Phone Number</label>
                 <input type="tel" name="phone" placeholder='Enter your phone number'required/>
                 <label>Write your messages here</label>
                 <textarea name="message" placeholder='Write your message here' rows='6'  required/>
                 <button type='submit' className='btn dark'>Submit now <FaCircleArrowRight /> </button>
             </form>
             <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact
