import React from 'react';

import logo from './logo.png'
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import bmi from './bmi.PNG';
import noor1 from './noor1.jpg';
import onlinedoctor from './onlinedoctor.PNG';
import ScienceDictionary from './ScienceDictionary.png';

function Logos(){

    return(
        <div className="main-title"  onContextMenu={e => e.preventDefault()}>

           <h1>Logos</h1>
           <hr />
            
            <div className="logoIcons">
                <img src={logo} alt="" />
                <img src={ScienceDictionary} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={bmi} alt="" />
                <img src={noor1} alt="" />
                <img src={onlinedoctor} alt="" />
            </div>
            <br />
            <br />
        </div>
    )
}

export default Logos;