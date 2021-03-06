import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../css/style.module.css';
import axios from 'axios';

export default class AddAlbumPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        modal: false,
        send: false,
        name: '',
        location: '',
        createdDate: '',
        selectedFile: null, 
        loaded: 0,
        albums: []
    }
}

componentDidMount() {
  axios.get(`https://api.lukemhoang.com/albums`)
    .then(res => {
      const albums = res.data;
      this.setState({ albums });
    })
}


submitAddForm(e){
    
    e.preventDefault();
    this.setState({modal: true});
    const name = document.getElementById('txt-name').value;  
    let path = name.toLowerCase();  
    path = path.split(' ').join('-');
    path = "https://api.lukemhoang.com/public/images/upload/"+path+"/"+path+".jpg";
    const location = document.getElementById('txt-location').value;    
    const createdDate = document.getElementById('txt-date').value;    
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    formData.append('name', this.state.name);

    axios.post("https://api.lukemhoang.com/upload", formData, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
    })
    .then(res => {
      console.log(res.statusText);
      this.setState({send: true});
    }) 

    
    axios({
        method: "POST",
        url: "https://api.lukemhoang.com/albums",
        data: {
          headers: {
              'Content-Type': 'application/json',
          },
            name: name,
            location: location,
            path: path,
            createdDate: createdDate
        }
    }).then((response)=>{
        if(response.data.status === 'success'){
            this.setState({send: true});
            this.resetForm();
        }else if(response.data.status === 'false'){
            this.setState({modal: false});
        }
    })

 
    
}

resetForm(){
    document.getElementById("add_form").reset();
        this.setState({name: '', location: '', selectedFile: null, loaded: 0});
}

onNameChange(e){
    this.setState({name: e.target.value})
}

onLocationChange(e){
    this.setState({location: e.target.value})
}

onDateChange(e){
  this.setState({createdDate: e.target.value})
}

onFileChange(e){
  this.setState({
    selectedFile: e.target.files[0],
    loaded: 0
  })
}

closeModal(){
    this.setState({modal: false})
}

render(){
    return(
        <div>
            <div className={`${style.admin_navigation}`}>
                <ul>
                    <li><NavLink exact to="/admin" activeClassName={style.active}>Admin Dashboard</NavLink></li>
                    <li><NavLink exact to="/add-album" activeClassName={style.active}>Add New Album</NavLink></li>
                    <li><NavLink exact to="/featured-albums" activeClassName={style.active}>Featured Albums</NavLink></li>
                </ul>
            </div>
            <div className={`${style.main} ${style.contact} ${style.addNew}`}>

                <div className={style.wrapper}>
                    <div className={`${style.content} ${style.flex}`}>
                        <div className={style.header_nav}>
                            <h1 className={style.headline}>
                            Add New Album
                            </h1>
                        </div>
                        <div className={`${style.form}`}>
                            <div className={style.card}>
                                <form id="add_form" onSubmit={this.submitAddForm.bind(this)} method="POST" enctype= "multipart/form-data">
                                    <div className={style.row}>
                                        <input type="text" placeholder="Name" id="txt-name" onChange={this.onNameChange.bind(this)} required/>
                                    </div>
                                    <div className={style.row}>
                                        <input type="text" placeholder="Location" id="txt-location" onChange={this.onLocationChange.bind(this)} required/>
                                    </div>
                                    <div className={style.row}>
                                        <input type="text" placeholder="Date" id="txt-date" onChange={this.onDateChange.bind(this)} required/>
                                    </div>
                                    <div className={style.row}>
                                        <input type="file" onChange={this.onFileChange.bind(this)} required/>
                                    </div>
                                    <div className={style.row}>
                                        <button type="submit" className={`${style.btn} ${style.btn_send}`}>Submit</button>
                                        <div>{Math.round(this.state.loaded,2)}%</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div className={style.modal} style={{display: this.state.modal ? 'flex' : 'none'}}>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={{color: '#fff', display: this.state.send ? 'none' : 'inline-block'}}></i>
            </div>

            <div className={style.modal} style={{display: (this.state.send && this.state.modal) ? 'flex' : 'none'}}>
                <div className={style.modal_content}>
                    <span className={style.modal_close} onClick={()=>this.closeModal()}><i class="fa fa-times" aria-hidden="true"></i></span>
                    
                    <p>{this.state.send ? 'A new record has been created': ''}</p>
                </div>
            </div>
        </div> 
    );
}
}