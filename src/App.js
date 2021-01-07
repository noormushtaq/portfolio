import React from 'react';
import './App.css';




import {
  BrowserRouter,
  Route,
  Link,

}from 'react-router-dom';

import noor from './noor.jpg';

import Index from './pages/Index';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import MyWork from './pages/MyWork';

import Logos from './pages/Logos';

function App() {

  return (
    <BrowserRouter basename={'/portfolio'}>
    
    <div className="pageContent">
      
            <header className="banner">
              <div className="logo" >
                <img src={noor} alt="" />
              </div>
              <nav >
              <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Resume</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/mywork">My Work</Link></li>
              <li><Link to="/contact">Contact Me</Link></li>
              </ul>

            </nav>
            </header>
                  <Route path="/" component={Index} exact={true}/>
                  <Route path="/contact" component={Contact} exact={true}/>
                  <Route path="/about" component={About} exact={true}/>
                  <Route path="/gallery" component={Gallery} exact={true}/>
                  <Route path="/mywork" component={MyWork} exact={true}/>
                  
                  <Route path="/mywork/logos" component={Logos} exact={true}/>
              
           <footer className="footer">
          
           
             <div className="copyright">
                <p >Copyright © Noor Al-Sabbagh</p>
              </div>
          </footer>
     
     
    </div>

    </BrowserRouter>
  );
}

export default App;
