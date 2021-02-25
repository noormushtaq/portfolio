import React from 'react';


import {Link} from 'react-router-dom';

import onlinedoctor from './onlinedoctor.PNG';
import bmi from './bmi.PNG';
import logo from './logo.png';
import ScienceDictionary from './ScienceDictionary.png';

function MyWork(){
    return(
        <div>
        
           <body style={{overflow:"hidden"}}>
           <div className="main-title">
           <h1>My Work</h1>
           <hr />

           <div className="MyWorkIcons">
             
           <a href="http://noormushtaq.github.io/comit-final-project">
             <img src={onlinedoctor} alt=""></img>
           </a>

           <a href="http://noormushtaq.github.io/bmi-Calculator">  
             <img src={bmi} alt=""></img>
            </a>

            <Link to="/mywork/logos">
             <img src={logo} alt=""></img>
            </Link>
            
            <a href="https://noormushtaq.github.io/kidsinfo/">
             <img src={ScienceDictionary} alt=""></img>
            </a> 
           </div>
           <br />
           <br />
           <br />
          

        </div>
        </body>
        </div>
    )
}
export default MyWork