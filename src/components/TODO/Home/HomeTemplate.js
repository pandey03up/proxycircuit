import React, { useState } from 'react';
import logo from '../../../Image/logo.png';
import {useAuth0} from '../../../react-auth0-spa';
import './HomeTemplate.css';

const Template = (props) =>{
    const {user} = useAuth0()
    return(
        <div className = 'content_main'>
        {console.log(user,'HomeTemplate...')}
            <div className = 'head'>
                <div className = 'logo_main'>
                    <img src = {logo} alt = 'logo' height = '90%' width = '50%' />
                </div>
                <div className = 'after_auth_succes'>
                    <div className = 'profile_image'>
                        <img src = {props.profile} alt = 'profile' width = '90%' height = '100%' />
                    </div>
                    <div className = 'logout_toggle' onClick={()=>props.logout()}>
                        Logout
                    </div>
                </div>
            </div>
            <div className = 'created-todos'>
                <div className = 'todos_container'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Template