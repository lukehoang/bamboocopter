import React, { Component } from 'react';
import axios from 'axios';
import style from '../css/style.module.css';
import { NavLink } from 'react-router-dom';


export default class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
        frame1id: '',
        frame2id: '',
        frame3id: '',
        frame4id: '',
           frame1: '',
           frame2: '',
           frame3: '',
           frame4: '',
           currentFrame : '',
           albums: [],
           layouts: [],
           modal: false,
           name1: '',
           name2: '',
           name3: '',
           name4: '',
    }
  }

  componentDidMount() {
    // this.fetchData();
  }


  fetchData(){
    // axios.get(`https://api.lukemhoang.com/layouts`)
    //     .then(res => {
    //     const result = res.data;
    //     const layouts = result[0];
    //     this.setState({ 
    //         frame1 : layouts.albumUrl[0].frame1URL,
    //         frame2 : layouts.albumUrl[0].frame2URL,
    //         frame3 : layouts.albumUrl[0].frame3URL,
    //         frame4 : layouts.albumUrl[0].frame4URL,

    //         frame1id: layouts.albumId[0].frame1,
    //         frame2id: layouts.albumId[0].frame2,
    //         frame3id: layouts.albumId[0].frame3,
    //         frame4id: layouts.albumId[0].frame4,

    //         name1 : layouts.albumUrl[0].frame1URL.split('/').pop().split('.')[0],
    //         name2 : layouts.albumUrl[0].frame2URL.split('/').pop().split('.')[0],
    //         name3 : layouts.albumUrl[0].frame3URL.split('/').pop().split('.')[0],
    //         name4 : layouts.albumUrl[0].frame4URL.split('/').pop().split('.')[0],
    //     });
    // })
  }
  getFrame(){
    //
  }

  render() {
    return(
      <div className={`${style.layout} ${style.homepage}`}>
          <div className={style.container}>
              <div className={`${style.col_lg}`}>
                  
                    <div className={`${style.frame}`} style={{backgroundImage: `url(${ (this.state.frame2!=='') ? this.state.frame2 : '' })`}}>
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

                   <div className={`${style.frame}`} style={{backgroundImage: `url(${ (this.state.frame1!=='') ? this.state.frame1 : '' })`}}>
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
