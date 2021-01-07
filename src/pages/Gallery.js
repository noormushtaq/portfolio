import React from 'react';

import Draw1 from './Draw1.jpg';
import draw2 from './draw2.jpg';
import draw3 from './draw3.jpg';
import draw4 from './draw4.jpg';
import draw5 from './draw5.jpg';
import draw6 from './draw6.jpg';
import draw7 from './draw7.jpg';

import photo1 from './photo1.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import cartoon from './cartoon.png';

import daycareflyer from './daycareflyer.png';
import daycare from './daycare.png';



function Gallery(){
   
    let[display,setdisplay]=React.useState(photo4);

function handledisplay(display){
    setdisplay(display)
}    
   return(
        <div>
          <main  onContextMenu={e => e.preventDefault()}>
              <div className="main-title">
                  <h1>Gallery</h1>
                  <hr />
                   
                  <h2>Digital Drawing on Wacom using Photoshop</h2>
                  <h4>Click on the image to view bigger</h4>

                 <div className="showThePhoto">

                    <div class="photos"> 
                        <img src={photo1} alt="" onClick={() => handledisplay(photo1)} /> 
                        <img src={photo3} alt="" onClick={() => handledisplay(photo3)} /> 
                        <img src={photo4} alt="" onClick={() => handledisplay(photo4)} /> 
                        <img src={photo5} alt="" onClick={() => handledisplay(photo5)}/>
                        <img src={cartoon} alt="" onClick={() => handledisplay(cartoon)}/> 
                    </div>

                    <div className="photoContainer">
                        <img src={display} alt=""/> 
                   </div>

                  
 
               </div>
               <hr />
               <br />

                   

                   <h2>Acrylic Paint on canvas and Pencils drawing</h2>
                   <div class="row">
                      <div class="column">
                            <img src={Draw1} />
                            <img src={draw2} />
                            <img src={draw4} />
                        </div>
                        <div class="column">
                           <img src={draw3} />
                           <img src={draw5} />
                        </div>
                        <div class="column">
                            <img src={draw6} />
                            <img src={draw7} />
                        </div>
                      </div>

                      <hr />

                  <div  className="Design">
                     <h2>Design</h2> 
                     <div class="row">
                        <div class="column">
                            <img src={daycareflyer} />
                        </div>
                        <div class="column">
                            <img src={daycare} />
                        </div>
                     </div>
                  </div>
                  <br />
                  <br />
                          
                      
              </div>

             
           
               
           </main>
          
          
        </div>
    )
}

export default Gallery;