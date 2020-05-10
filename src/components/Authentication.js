import React from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../Image/logo.png';
import faceImage from '../Image/pinedPhoto.jpg'
import {useAuth0} from '../react-auth0-spa';
import './Authentication.css';

const Home = () =>{

  const { isAuthenticated,loginWithRedirect,user} = useAuth0();
  return(
    <div>
      {
        !isAuthenticated &&(
          <div className = 'home_container'>
              <div className = 'home_title_container'>
                  <div className = 'app_logo'>
                    <img src = {logo} alt = 'logo' width = '8%' height = '100%'/>
                  </div>
                  <div className = 'authentication'>
                    <div className = 'tag_login'>
                        <div className = "tag" onClick={() => loginWithRedirect({})}>
                            Login
                        </div>
                    </div>
                  </div>
              </div>
              <div className = 'about_app'>
                  <section className = 'about'>
                      <h3>Pen and papers are boring</h3>
                      <p>Try the new way to remember</p>
                  </section>
                  <section className = 'showing_image'>
                      <img src = {faceImage} alt = 'sourceImage' width = '100%' height = '100%' />
                  </section>
              </div>
          </div>
        )
      }
      {isAuthenticated &&<Redirect to = '/todos'/>}
    </div>
    
  )
}
export default Home