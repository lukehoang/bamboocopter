import React, { Component } from 'react';
import style from '../css/style.module.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class SingleAlbum extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            albumName: '',
            albums: [],
        }
    }   

    //fetch data after page loaded
    componentDidMount() {
        this.fetchData();
    }

    //middlewares
    fetchData(){
        let thisAlbumNam = this.props.name;
        axios.get(`https://api.lukemhoang.com/photos/` + thisAlbumNam)
          .then(res => {
            var albums = res.data;
            var photos = [];
            albums.forEach(album => {
                let id = album._id;
                let collections = album.imgCollection;
                collections.forEach(collection => {
                    photos.push({url: collection, id : id});
                });
            });

            albums = photos;

            console.log(photos);

            this.setState({ 
                albums
            });
        });
    }


    

    render(){
        return(
            <div className={style.singleAlbum}>
                <div className={style.container}>
                    <div className={`${style.heading}`}>
                        <h1 id="txt-albumName">{this.props.name.split('-').join(' ')}</h1>
                       
                    </div>
                    <div className={`${style.content}`}>
                    { this.state.albums.map(album => 
                        <div key={album.url} className={`${style.itemPhoto}`}>
                            <img src={`${album.url}`}/>
                        </div>
                    )}
                    </div>
                </div>
               
            </div>
        );
    }
}