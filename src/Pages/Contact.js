import React, { Component } from 'react';
import style from '../css/style.module.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class ContactPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            modal: false,
            send: false,
            name: '',
            email: '',
            message: ''
        }
    }
    submitContactForm(e){
        
        e.preventDefault();
        this.setState({modal: true});
        const name = document.getElementById('txt-cf-name').value;    
        const email = document.getElementById('txt-cf-email').value;    
        const message = document.getElementById('txt-cf-message').value;   
        
        axios({
            method: "POST",
            url: "https://api.lukemhoang.com/send",
            data: {
                name: name,
                email: email,
                message: message,
                domain: 'bamboocopter.net'
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
        document.getElementById("contact_form").reset();
        this.setState({name: '', email: '', message: ''});
    }

    onNameChange(e){
        this.setState({name: e.target.value})
    }

    onEmailChange(e){
        this.setState({email: e.target.value})
    }

    onMessageChange(e){
        this.setState({message: e.target.value})
    }

    closeModal(){
        this.setState({modal: false})
    }

    render(){
        return(
            <div>
                <div className={`${style.main} ${style.contact}`}>
                    <div className={style.container}>
                        <div className={style.brand}>
                            <h1><NavLink exact to="/">Bamboocopter</NavLink></h1>
                            
                            <h5>Luke Hoang - Travel Photo-Developer</h5>
                        </div>
                    </div>
                    <div className={style.wrapper}>
                        <div className={`${style.content} ${style.flex}`}>
                            <div className={style.header_nav}>
                                <h1 className={style.headline}>
                                Let's talk!
                                </h1>
                                <div className={style.copy}>
                                    <p>Leave me a message, <br/> I try my best to response to all sort of questions.</p>
                                </div>

                            </div>
                            <div className={`${style.form}`}>
                                <div className={style.card}>
                                    <form id="contact_form" onSubmit={this.submitContactForm.bind(this)} method="POST">
                                        <div className={style.row}>
                                            <input type="text" placeholder="Your Name" id="txt-cf-name" onChange={this.onNameChange.bind(this)} required/>
                                        </div>
                                        <div className={style.row}>
                                            <input type="email" placeholder="Your Email" id="txt-cf-email" onChange={this.onEmailChange.bind(this)} required/>
                                        </div>
                                        <div className={style.row}>
                                            <textarea rows="5" placeholder="Message"  id="txt-cf-message" onChange={this.onMessageChange.bind(this)} required></textarea>
                                        </div>
                                        <div className={style.row}>
                                            <button type="submit" className={`${style.btn} ${style.btn_send}`}>Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>

                <div className={style.modal} style={{display: this.state.modal ? 'flex' : 'none'}}>
                        <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style={{color: '#fff', display: this.state.send ? 'none' : 'inline-block'}}></i>
                </div>

                <div className={style.modal} style={{display: (this.state.send && this.state.modal) ? 'flex' : 'none'}}>
                    <div className={style.modal_content}>
                        <span className={style.modal_close} onClick={()=>this.closeModal()}><i class="fa fa-times" aria-hidden="true"></i></span>
                        
                        <p>{this.state.send ? 'Thank you for reaching out. I will get back to you soon. ': ''}</p>
                    </div>
                </div>
            </div> 
        );
    }
}
