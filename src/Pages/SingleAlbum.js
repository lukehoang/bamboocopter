import React, { Component, useState, useCallback } from 'react';
import style from '../css/style.module.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default class SingleAlbum extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            albumName: '',
            album: [],
            photos: [],
            newPhotos: [],
        }
    }   

    //fetch data after page loaded
    componentDidMount() {
        this.fetchData();
    }

    //middlewares
    fetchData(){
        let thisAlbumName = this.props.name;
        axios.get(`https://api.bamboocopter.net/api/getAlbumByName/` + thisAlbumName)
        .then(res => {
          var album = res.data.album;
           this.setState({ 
                album,
                albumId : album[0]['id']
            });

          axios.get(`https://api.bamboocopter.net/api/getPhotosByAlbumId/` + album[0]['id'])
            .then(res => {
                var photos = res.data.photos;
                console.log(photos);
                var newPhotos = [];
                photos.forEach(photo => {
                    newPhotos.push({
                        src: photo.url,
                        // width: 4,
                        // height: 3
                    })
                });
                this.setState({ 
                    photos,
                    newPhotos : newPhotos
                });
            });//end 2nd ajax
        
        }); //end first ajax
        
    }


    

    render(){
        return(
            <div className={style.singleAlbum}>
                <div className={style.container}>
                    <div className={style.brand}>
                        <h1><NavLink exact to="/">Bamboocopter</NavLink></h1>
                        
                        <h5>Luke Hoang - Travel Developer</h5>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={`${style.heading}`}>
                        <h1 id="txt-albumName">{this.props.name.split('-').join(' ')}</h1>
                       
                    </div>
                    {/* <div className={`${style.content}`}>
                    { this.state.photos.map(photo => 
                        <div key={photo.id} className={`${style.itemPhoto}`}>
                            <img src={`${photo.url}`}/>
                        </div>
                    )}
                    </div> */}
                     <Gallery photos={this.state.newPhotos} />
                </div>


               
            </div>
           

        );
    }
}