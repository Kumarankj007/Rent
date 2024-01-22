import React from 'react';
import './App.css';
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';
import rent from './assets/01.png';
import i1 from './assets/i1.png';
import i2 from './assets/i2.png';

function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand logo" href="#"><img src={rent} alt=""/></a>         

         <div className="">
           <input className="form-control" type="search" placeholder="Destination, city, address" aria-label="Search" />
         </div>

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>

        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link ms-auto" href="#">English</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-auto" href="#">TRY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-auto" href="#">Become a host</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-auto" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-auto" href="#">Sign up</a>
            </li>           
          </ul>
        </div>
      </nav>

      <div className="home">
        <h1 style={{color:"white"}}>It's simple to become a RentALL host</h1>
        <button className="btn btn-light" style={{marginRight: "15px"}}>Become a host</button>
        <button className="btn btn-dark" style={{backgroundColor: "rgba(0,0,0,0)", border: '1px solid white'}}>Learn More</button>
      </div>
      

      <div className="container">
        <div className="row row1 m-5 text-justify">
          <div className="col-md-6">
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
          </div>
          <div className="col-md-6">
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
          </div>
        </div>

        
        <div className="row row2 p-5">
        <div className="smln1"><div className="smln"></div></div>     
          <h1 className="text-center">There are 3 Lorem Ipsum generators</h1>
          
          <div className="col-md-4">
            <div className="cir"><div>1</div></div>
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
          
          <div className="col-md-4">
            <div className="cir"><div>2</div></div>
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
          
          <div className="col-md-4">
            <div className="cir"><div>3</div></div>
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>


        <div className="row row3">

        <div className="smln1"><div className="smln"></div></div> 
          <h1 className="text-center" style={{padding: "0px 0 20px"}}>Use our generator to get your own</h1>
          
          <div className="col-md-6">
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</small>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
          
          <div className="col-md-6">
            <ul>
              <li><i className="material-icons">done</i>Excepteur sint occaecat cupidatat non proident</li>
              <li><i className="material-icons">done</i>Excepteur sint occaecat cupidatat non proident</li>
              <li><i className="material-icons">done</i>Excepteur sint occaecat cupidatat non proident</li>
              <li><i className="material-icons">done</i>Excepteur sint occaecat cupidatat non proident</li>
              <li><i className="material-icons">done</i>Excepteur sint occaecat cupidatat non proident</li>
              <li><i className="material-icons">done</i>Excepteur sint occaecat cupidatat non proident</li>
            </ul>
          </div>          
        </div>

        <img src={two} alt="" style={{padding: "50px 0", width: "100%"}} />

        <div className="row row3 m-5">
          <div className="smln1"><div className="smln"></div></div> 
          <h1 className="text-center">It to make a type specimen book</h1>
          
          <div className="col-md-4">
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
          
          <div className="col-md-4">
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
          
          <div className="col-md-4">
            <h4>What is Lorem Ipsum?</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>

        <div className="row row4 p-5">
        
          <div className="col-md-6 mb-5">
            <img src={three} alt="" style={{width: '100%'}}/>
          </div>
        
          <div className="col-md-6 con">
            <h3><q>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</q></h3>
            <p>software lke Aldus PageMaker including versions of Lorem Ipsum</p>
            <button>Lorem Ipsum Text</button>
          </div>
        </div>

        <div className="row row5 p-5">
        
          <div className="col-md-6 mb-5 con">
            <h3><q>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</q></h3>
                <p>software lke Aldus PageMaker including versions of Lorem Ipsum</p>
            <button>Lorem Ipsum Text</button>

          </div>
        
          <div className="col-md-6">
            <img src={four} alt="" style={{width: '100%'}}/>
          </div>
        </div>


        <div className="row row6 ">
         <div className="smln1"><div className="smln"></div></div>
          <h1 className="text-center">FAQ</h1>

          <div className="col-md-6 text-center p-5">
            <a href="#">Lorem ipsum dolor sit amet, consecteturt</a><br /> <hr />
            <a href="#">Lorem ipsum dolor sit amet, consecteturt</a><hr />
          </div>
          
          <div className="col-md-6 text-center p-5">            
            <a href="#">Lorem ipsum dolor sit amet, consecteturt</a><br /> <hr />
            <a href="#">Lorem ipsum dolor sit amet, consecteturt</a><hr />
          </div>
        </div>
      </div>

      <hr />

      <div className="footer">
        <div className="container">
          <div className="row row7">
            <div className="col-lg-3 col-md-6 col-sm-6 f1">
              <p style={{fontWeight:'bold'}}>RentALL</p>
              <p>About</p>
              <p>Contact Us</p>
              <p>my new page</p><br/><br/><br/><br/>
              <p> &#169;RentALL</p>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 f1">
              <p style={{fontWeight:'bold'}}>Discover</p>
              <p>About</p>
              <p>Contact Us</p>
              <p>my new page</p>
              <p>http://demo.rentall.com/rooms/privateroom-for-rent-in-network-3387</p>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6 f1"  style={{paddingLeft: '50px'}}>
              <p style={{fontWeight:'bold'}}>Hoisting</p>
              <p>About</p>
              <p>Contact Us</p>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6 f1">
              <p style={{fontWeight:'bold'}}>App avilable on</p>
              <img src={i1} alt=""/>
              <img src={i2} alt=""/>
              <div className="fa1">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bot">RentALL uses cookies to understand how you use our ste and to improve your experience. By useing our site, you accept our use of cookies. To learn more, go to our <a href="#"><i>Cooke policy</i></a>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}

export default App;