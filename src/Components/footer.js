import React, {Component} from 'react';
import style from '../css/style.module.css';

export default class Footer extends Component {

    showCurrentYear() {
        return new Date().getFullYear();
    }

    render(){
        return(
            <div></div>  
            // <div className={style.footer}>
            //     <div className={`${style.wrapper} ${style.flex}`}>
            //         <div className={style.copy}>
            //             <p>&copy;{this.showCurrentYear()} &#9866; <a href="https://lukehoang.com/" target="_blank">Lukehoang.com</a></p>
            //         </div>
            //     </div>
            // </div>
        );
    }
}