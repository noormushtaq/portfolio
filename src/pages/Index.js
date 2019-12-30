import React from 'react';
import Image2 from './Image2.jpg';
import {Link} from 'react-router-dom';

function Index(){

    return(
        <div>
            <main>
            <img className="backImage" src={Image2} alt="" />
            <body style={{background:Image2 }}>

           <div className="background-image">
          
                    </div>
                    <div className="hero-text">
                    <h3>Hello, I am</h3>
                    <h1 className="my-name"> Noor</h1>
                      <p>
                        I am a web developer / designer
                        <br/>
                          Live in saskatoon, Saskatchewan Canada.
                        <br/>
                          I have passion for web design and develop.
                        <br/>
                          I have valuable experience in HTML, CSS, and JavaScript. I can develop and design websites using REACT JS.
                          <br />
                          When I'm not coding, I illustrate using photoshop and Wacom. I paint by Acrylic or coloured pencil. I have a good experience in video editing. I like cooking and making sweets.
                        <br />
                         Here you can find my <Link to="/about">Resume</Link> to know more about me
                        </p>
                    </div>

           </body>

                   
                   
            </main>
        </div>
    )

}
export default Index;