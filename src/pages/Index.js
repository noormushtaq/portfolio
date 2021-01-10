import React from 'react';

import {Link} from 'react-router-dom';

import videoBack from './videoBack.mp4';


function Index(){
  
    return(
        <div>
            <main>

            <body style={{overflow:"hidden"}} >
            <video className='videoTag'
                             autoPlay 
                             loop 
                             muted 
                             config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                             onContextMenu={e => e.preventDefault()}
                             disablePictureInPicture="false"
                             src={videoBack}
                             >
               
            </video>
           

           <div className="background-image">
          
                    </div>
                    <div className="hero-text">

                    <div className="MyName">

                    <h3>Hello, I am</h3>
                    
                     <h1 className="my-name"> Noor</h1>
                    </div>
                      <p className="changeTheColor">
                        I am a web developer/designer.
                        <br/>
                        Live in Saskatoon, Saskatchewan, Canada.
                        <br/>
                        I have a passion for web design and development using HTML, CSS, and JavaScript with REACTJS.
                        <br />
                        When I'm not coding, I illustrate using photoshop and Wacom. I paint with acrylic or colored pencils. I have good experience in video editing. I like cooking and making sweets.
                        <br />
                         Here you can know more <Link to="/about" style={{color:"bisque",fontFamily:"Times New Roman",fontSize:"20px"}}>About</Link> me.
                        </p>
                        

                    </div>

                   
                   <div>
                 
                   </div>
                  
           </body>
                
    
                   
            </main>
            
        </div>
    )

}
export default Index;