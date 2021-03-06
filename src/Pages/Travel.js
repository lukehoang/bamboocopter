import React, { Component } from 'react';
import axios from 'axios';
import style from '../css/style.module.css';
import { NavLink } from 'react-router-dom';

export default class TravelPage extends Component {
  constructor(props){
      super(props);
      this.state = {
          albums: []
      }
  }
    
  
  componentDidMount() {
    axios.get(`https://api.lukemhoang.com/albums`)
      .then(res => {
        const albums = res.data;
        this.setState({ 
            albums
        });
    })
  }


  render() {
    return(
      <div className={style.albums}>
         <div className={style.container}>
          <div className={style.brand}>
              <h1><NavLink exact to="/">Bamboocopter</NavLink></h1>
              
              <h5>Luke Hoang - Travel Photo-Developer</h5>
          </div>
        </div>
       <div className={style.container}>
            { this.state.albums.map(album => 
              <div key={album.name} className={`${style.item}`} >
                  <div className={`${style.bg}`} style={{backgroundImage: `url(${album.path})`}}>
                    <NavLink exact to={`/album/${album.name.split(' ').join('-')}`}></NavLink>
                    <div className={`${style.text}`}>
                      <h4 className={`${style.title}`}>{album.name}</h4>
                      <p>{album.location}</p>
                      <p>{album.createdDate}</p>
                      {/* <p>{album.caption}</p> */}
                    </div>
                </div>
              </div>
            )}
        </div>
     </div>
    );
  }
}