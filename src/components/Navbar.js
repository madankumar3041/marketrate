import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment } from 'semantic-ui-react'

export function Navbar (){
    return (
       <div>
    <Segment inverted color='blue'>
        <Link style={{color:"white",float:"left"}} to="/">Home</Link>
        <Link style={{color:"white",float:"left"}} to="/admin">Admin</Link>
         <Link style={{color:"white",float:"right"}} to="/login">Login</Link>
         <Link style={{color:"white",float:"right"}} to="/signup">SignUp/</Link>
    </Segment>
       </div>
    );
}
