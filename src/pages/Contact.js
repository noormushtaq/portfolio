import React from 'react';

import github from './github.jpg';
import envelope from './envelope.jpg';
import facebook from './facebook.jpg';
import linkedin from './linkedin.jpg';
import youtube from './youtube.jpg';

function Contact(){

    return(
        <div>

         <div className="contactTitle">   
            <h1>Contact me</h1>
          
            
            <p >Have any question? Please, send me your message.< br/>
                I am very happy to hear from you
            </p>
            
            <div>
                <h2 > Contact Information</h2>
                <p className="contatText">Name: Noor Al-Sabbagh</p>
                <p className="contatText">CellPhone:<a href="tel:3067160496">(306) 716-0496</a></p>
                <p className="contatText">Email:<a href="mailto:noormushtaq1985@gmail.com">noormushatq1985@gmail.com</a></p>
                <p className="contatText">Sakatoon, SK. Canada</p>
            </div>
            <div class="social-icons">
                <a href="mailto:noormushtaq1985@gmail.com"  >
                   <img src={envelope} alt="" /> 
                </a>
                <a href="https://www.linkedin.com/in/noor-al-sabbagh-040172193">
                   <img src={linkedin} alt="" /> 
                </a>
                <a href="https://github.com/noormushtaq"  >
                   <img src={github} alt="" /> 
                </a> 
                <a href="https://www.facebook.com/profile.php?id=100010223082595">  
                   <img src={facebook} alt="" /> 
                </a>
                <a href="https://www.youtube.com/channel/UCZJG_uBzdEM7mrgfSZZaV9Q/videos">
                   <img src={youtube} alt="" /> 
                </a>
            </div>
         </div> 
         <br />
         <br />
         <br />
      </div>
    )
}

export default Contact;