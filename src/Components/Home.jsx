import React from "react";
import './Home.css'

export default function Home(){
    return(
        <div className="container">
        <div id="nav">
        <a href="/signup" target="_top">
            <div id = "sign_up" class = "nav_sections">
                Sign Up
            </div>
        </a>
        <a href="/signin" target = "_top">
            <div id = "sign_in" class = "nav_sections">
                Sign in
            </div>
        </a>
        <a href="/reg" target = "_top">
            <div id = "register" class="nav_sections">
                Register
            </div>
        </a>
    </div>
       <div className="context">
        <h1>Want to learn all about shapes?</h1>
           <a href="/learn">
               <div id="click">
                   Click Here!
               </div>
           </a>
        </div>

        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
    )
}