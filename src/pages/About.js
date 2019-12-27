import React from 'react';
import {Link} from 'react-router-dom';
import Resume from './Resume.pdf';

function About(){

    return(
        <div className="Resume">
            <main>
             <div className="main-title">   
            <h1>Resume</h1>
            <p>
            I am a web developer / designer
            <br/>
           Live in Saskatoon, Saskatchewan Canada. I have passion for web design and develop.<br />
           here you can find my resume to know more about me.
            </p>
            <hr />
           
            </div>
            <div className="Qualifications">
                <h3>Highlights of Qualifications</h3>
                
                <ul>
                   <li> Bachelor’s degree in Computer Science, and 2 years of experience working in programming</li>
                   <li>ComIT React, Javascript, HTML, and CSS Certificat</li>
                   <li>Effective communication skills: fluent in English and Arabic</li>
                   <li>Excellent MS Office Suite computer skills. </li>
                   <li>Programming Languages: Javascript, Visual Basics, C, C++, and Pascal</li> 
                   <li>Dedicated to continuous learning through online websites such as freeCodeCamp, W3schools and GitHub.  </li>
                   <li>Excellent sketching and drawing abilities using Wacom in Photoshop</li>
                   <li>Creative thinking and strong ability in project and logo design.</li>
                   <li>Excellent working as a team member as well as independently.</li>
                </ul>               
            </div>
             <br />
            <div className="container">
              <h3>Employment History </h3>
              
              <h4> Instructor Assistant for Web Development Courses for two years in Al-Meezan Company from 2011 to 2013 </h4>
              <p>what I did is Giving assistance classes in computer science to the client (students) to learn more about computer programming (HTML, Visual Basic and C++ Languages). </p>

              <h4>Data Entry</h4>
              <ul>
              <li>I worked In 2007 for one year. In The Library of University of Technology Iraq / Baghdad</li>
              <li>what I did is:</li>
              <li>Provided on-going data entry for the University library</li>
              <li>Worked with a team of nearly 30 to input each book in the library into an electronic filing system. Completed the task in one year. </li>
              <li>Entered information of each book in the library into a Microsoft ACCESS database.</li>
            </ul>
            </div>
            <br />
            <div className="container">
              <h3>Education</h3>
              
              <h4>Bachelor’s Degree in Computer Science     	2003 - 2007 </h4>
              <p>University of Technology in Baghdad 	Iraq  </p>

              <h4>ComIT React Course    2019</h4>
              <p>Saskatoon, SK Canada </p>            
             
            </div>
            <br />
            <div className="container">
              <h3>Community Volunteer</h3>
              
              <h4>Parent Helper  2014-2018</h4>
              <p>Varsity View Cooperative Preschool (VVCP) Saskatoon, SK Canada</p>

              <h4>Graphic Designer (illustrate and sketch educational posters for classroom use)	2006 Iraq</h4>
              <p>Fatih Al-Arabi Elementary School and Al-Ferdous High School </p>            
             
            </div>

            <div className="download">
                <h3>here you can download my Resume</h3>
                <Link to={Resume} target="_blank" download>Download</Link>
            </div>
            </main>
        </div>
    )

}
export default About;