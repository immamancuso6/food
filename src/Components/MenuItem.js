import React from 'react';
import './MenuItem.css';


const MenuItem = (props) => { 
    return (
        <li onClick={props.showProducts} className="Item">
           <a className={props.active}>{props.title}</a>
        </li>
    ); 
};
   
export default MenuItem;