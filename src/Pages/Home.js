import React, { Component } from 'react';
import axios from 'axios';
import style from '../css/style.module.css';
import { NavLink } from 'react-router-dom';


export default class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
           modal: false,
           main: '',
           side: '',
    }
  }

  componentDidMount() {
    axios.get(`https://api.bamboocopter.net/api/getSectionsByLayout/home`)
      .then(res => {
      const sections = res.data.sections;
      console.log(sections);
      sections.forEach(section => {
        if(section.name == 'main-background'){
          this.setState({ 
              main: section.body_image,
          });
        }
        if(section.name == 'side-image'){
          this.setState({ 
              side: section.body_image,
          });
        }
      });
    })
  }

  render() {
    return(
      <div className={`${style.layout} ${style.homepage}`}>
          <div className={style.container}>
              <div className={`${style.col_lg}`}>
                  
                    <div className={`${style.frame}`} style={{backgroundImage: `url(${ (this.state.main!=='') ? this.state.main : '' })`}}>
                      {/* <NavLink exact to={`/album/${this.state.name2}`}></NavLink>
                      <input type="hidden" id="frame2-url" value={this.state.frame2}/>
                      <input type="hidden" id="frame2" value={this.state.frame2id}/>
                      <h4>{this.state.name2}</h4> */}
                        <NavLink exact to={`/travel`} className={`${style.see_more_desktop} ${style.btn}`}><span>see</span><br/>More?</NavLink>
                    </div>
                  
                   
                 
              </div>
              <div className={`${style.col_sm}`}>
                  <div></div>
                  <div>
                     <div className={style.brand}>
                        <h1><NavLink exact to="/">Bamboocopter</NavLink></h1>
                        
                        <h5>Luke Hoang - Travel Photo-Developer</h5>
                    </div>
                  </div>

                   <div className={`${style.frame}`} style={{backgroundImage: `url(${ (this.state.side!=='') ? this.state.side : '' })`}}>
                         {/* <NavLink exact to={`/album/${this.state.name1}`}></NavLink>
                        <input type="hidden" id="frame1-url" value={this.state.frame1}/>
                        <input type="hidden" id="frame1" value={this.state.frame1id}/>
                        <h4>{this.state.name1}</h4> */}
                        <div></div>
                    </div>

                  
                 

                  {/* <div className={`${style.frame}`} style={{backgroundImage: `url(${ (this.state.frame4!=='') ? this.state.frame4 : '' })`}}>
                       <NavLink exact to={`/album/${this.state.name4}`}></NavLink>
                      <input type="hidden" id="frame4-url" value={this.state.frame4}/>
                      <input type="hidden" id="frame4" value={this.state.frame4id}/>
                      <h4>{this.state.name4}</h4>
                  </div> */}

              </div>

               <div className={`${style.frame} ${style.frame_3}`} style={{backgroundImage: `url(${ (this.state.frame3!=='') ? this.state.frame3 : '' })`}}>
                      {/* <NavLink exact to={`/album/${this.state.name3}`}></NavLink>
                      <input type="hidden" id="frame3-url" value={this.state.frame3}/>
                      <input type="hidden" id="frame3" value={this.state.frame3id}/>
                      <h4>{this.state.name3}</h4> */}
                </div>
          </div>
          {/* <div className={style.container}>
            <NavLink exact to={`/travel`} className={style.see_more}>See More</NavLink>
          </div> */}
      
      </div>
    );
  }
}
