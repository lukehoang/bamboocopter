import React, { Component } from 'react';
import style from '../css/style.module.css';
import { NavLink } from 'react-router-dom';
import profile from '../img/profile.jpg';

export default class AboutPage extends Component {



  render() {
    return(
      <div className={style.about}>
         <div className={style.container}>
          <div className={style.brand}>
              <h1><NavLink exact to="/">Bamboocopter</NavLink></h1>
              
              <h5>Luke Hoang - Travel Photo-Developer</h5>
          </div>
        </div>
        <div className={style.container}>
            <div className={`${style.bg}`} style={{backgroundImage: `url(${profile})`}}></div>
            <div className={`${style.text}`}>
              <h1>Luke hoang</h1>
              <p>I'm a full time web developer based in Philadelphia, PA. My goals are focus on content and conveying the message that what you want to send to your audiences.</p>
              <p>Photography is my hobby. I created this site to save the memories that I captured while traveling.</p>
              <p>Feel Free to <NavLink exact to={`/contact`}>Contact Me</NavLink> if you have any questions or just want to talk. :)</p>
              <p><NavLink exact to={`/travel`}>Explore my travels</NavLink> Or <a href="https://lukehoang.com" target="_blank">View my website works</a></p>
            </div>
        </div>
      </div>
    );
  }
}