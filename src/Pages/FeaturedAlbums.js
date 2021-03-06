import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/style.module.css';
import axios from 'axios';

export default class FeaturedAlbumsPage extends Component {
  
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

    render(){
        return(
            <div className={style.adminpage}>
                <div className={`${style.admin_navigation}`}>
                    <ul>
                        <li><NavLink exact to="/add-album" activeClassName={style.active}>Add New Album</NavLink></li>
                        <li><NavLink exact to="/featured-albums" activeClassName={style.active}>Featured Albums</NavLink></li>
                    </ul>
                </div>
                <div>
                    <div className={`${style.flex} ${style.content}`}>
                        
                        { this.state.albums.map(album => 
                        <div key={album.name} className={`${style.item}`} style={{backgroundImage: `url(${album.path})`}}>
                            <h4 className={`${style.title}`}>{album.name}</h4>
                        </div>
                        )}

                    </div>
                </div>

            </div>
        );
    }
}