import React from 'react';

import Resume from './Resume.pdf';

function About(){

  
 
    return(
        <div className="Resume">
            <main>
             <div className="main-title">   
            <h1>About Me</h1>
            <p>
            I am a web developer / designer
            <br/>
           Live in Saskatoon, Saskatchewan Canada. I have passion for web design and develop.<br />
           here you can find my resume to know more about me.
            </p>
            <hr />
           
       </div>

            <div className="download">
                <h3>here you can download my Resume</h3>
                <a href={Resume}>Download</a>
            </div>
            </main>
            <br />
            <br />
        </div>
    )

}
export default About;