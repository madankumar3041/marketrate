import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Segment } from 'semantic-ui-react'
import './logged_screen.css';

export function LoggedScreen (){
    return (
       <div>
           <Segment inverted color='blue'>
           <Link style={{color:"white",float:"left"}} to="/">Home</Link>
           <img src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" className="ui mini right floated image" style={{position:"relative",bottom:"5px"}}/>
         <Link className="account" style={{color:"white"}} to="#">My Account</Link>
         </Segment>
         <button className="ui blue button add_btn"style={{float:"left"}}>
           <Link style={{color:"white"}} to="/add">Add More Product</Link></button>
  <div className="ui container conc">
  <div class="ui cards disc">
    <div class="ui card carddisc " style={{position:"relative"}}>
    <div class="content">
    <div className="header">Samsung Galaxy A51</div>
    <div className="meta">Brand:Samsung</div>
    <div className="meta">Category:Mobile Phone</div>
    <div className="description">Set a pricing rule to see a <strong>Smart Price</strong> suggestion</div>
      <div style={{float:"right",position:"absolute",top:0,right:"0.5rem",borderLeft:"0.1px solid #DCDCDC"}}>
        Price Shown
        <ol>
          <li>Amazon : $20</li>
          <li>Flipkart : $30</li>
          <li>Amazon : $50</li>
          <li>BigBasket : $60</li>
        </ol>
      </div>
    </div><div class="extra content"><div class="ui two buttons"><button class="ui green basic button">Product Cost : $20.00</button>
    <button class="ui red basic button">Position 
    <i aris-hidden="true" className="star icon" style={{marginLeft:"3px"}}></i>
    <i aris-hidden="true" className="star icon" style={{marginLeft:"1px"}}></i>
    <i aris-hidden="true" className="star icon" style={{marginLeft:"1px"}}></i>
    </button>
    </div></div>
    </div>
    </div>
    </div>
</div>
    );
}


  