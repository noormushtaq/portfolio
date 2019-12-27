import React from 'react';
import Image2 from './Image2.jpg'

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
                        I am a web developer and illustrator.
                        <br/>
                        I enjoy to design and develope websites as a front end developer. I have a good experience in HTML, CSS, and JavaScript. I can develop and design websites using REACT JS. 
                        <br/>
                        When I'm not coding, I illustrate using photoshop and Wacom. I paint by Acrylic or coloured pencil. I have a good experience in video editing. I like cooking and making sweets.
                        <br/>
                        To know more about me, Go to Resume page
                        </p>
                    </div>
            
           </body>
            
            </main>
        </div>
    )

}
export default Index;