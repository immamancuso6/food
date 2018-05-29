import React from 'react';
import './Search.css';


const Search = (props) => { 
    return (
        <input type="text" 
            value={props.value}
            onChange={props.searched} />
    ); 
};
   
export default Search;