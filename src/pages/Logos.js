import React from 'react';

import logo from './logo.png'
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import bmi from './bmi.PNG';
import onlinedoctor from './onlinedoctor.PNG';

function Logos(){

    return(
        <div className="main-title">

           <h1>Logos</h1>
           <hr />
            
            <div className="logoIcons">
                <img src={logo} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={bmi} alt="" />
                <img src={onlinedoctor} alt="" />
            </div>
        </div>
    )
}

export default Logos;