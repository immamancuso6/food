import React from 'react';
import './Product.css';


const Product = ( props ) => {
    const showDescription = props.productDescription === props.description ? true : false;
    return (
        <li onClick={props.toggleDescription}>
           <a className={props.active}>{props.title}</a>
            {showDescription &&
               <p>{props.description}</p>
            }
        </li>
    );    
};
    
export default Product;