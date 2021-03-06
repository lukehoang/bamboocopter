import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


//CSS
import style from '../css/style.module.css';

export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: true,
            close: false,
            animated: false
        }
    }

    toggleMenu(name){
        if(name === 'open'){
            this.setState({
                open: false,
                close: true,
                animated: true
            });
        }else if(name === 'close'){
            this.setState({
                open: true,
                close: false,
                animated: false
            });
        }
    }

    render(){
        return (
            <header>
                 <div className={`${style.navigation}`}>
                    <div className={`${style.wrapper} ${style.flex}`}>
                        {/* <div className={style.brand}>
                            <h1><NavLink exact to="/">Bamboocopter</NavLink></h1>
                            
                            <h5>Luke Hoang - Travel Photo-Developer</h5>
                        </div> */}
                        <div className={style.nav}>
                            <ul className={style.navbar}>
                                <li><NavLink exact to="/" activeClassName={style.active}>Home</NavLink></li>
                                <li><NavLink exact to="/about" activeClassName={style.active}>About</NavLink></li>
                                <li><NavLink exact to="/travel" activeClassName={style.active}>Travel</NavLink></li>
                                <li><NavLink exact to="/contact" activeClassName={style.active}>Contact</NavLink></li>
                            </ul>
                            <ul className={style.social}>
                                <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/lukemhoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://github.com/lukehoang" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={style.navigation_mobile}>
                    <div className={`${style.wrapper} ${style.flex}`}>
                        <div className={style.brand}>
                            <h1><NavLink exact to="/">Bamboocopter</NavLink></h1>
                            <h5>Luke Hoang - Travel Photo-Developer</h5>
                        </div>
                        <div className={style.nav_icon}>
                            <i className={`fa fa-bars fa-2x ${!this.state.open ? style.hidden : ''}`} aria-hidden="true" onClick={()=>(this.toggleMenu('open'))}></i><i className={`fa fa-times fa-2x ${!this.state.close ? style.hidden : ''}`} aria-hidden="true" onClick={()=>(this.toggleMenu('close'))}></i>
                        </div>
                    </div>
                    <div className={`${style.nav} ${this.state.animated ? style.animated : ''}`}>
                        <ul>
                            <li><NavLink exact to="/"  activeClassName={style.active} onClick={()=>(this.toggleMenu('close'))}>Home</NavLink></li>
                            <li><NavLink to="/about" activeClassName={style.active} onClick={()=>(this.toggleMenu('close'))}>About</NavLink></li>
                            <li><NavLink to="/travel" activeClassName={style.active} onClick={()=>(this.toggleMenu('close'))}>Travel</NavLink></li>
                            <li><NavLink to="/contact" activeClassName={style.active} onClick={()=>(this.toggleMenu('close'))}>Contact</NavLink></li>
                        </ul>

                        <ul className={style.social}>
                            <li><a href="https://www.facebook.com/bamboocopterfilm/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/lukemhoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://github.com/lukehoang" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/lukehoang/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </header>

        );
    }
}
