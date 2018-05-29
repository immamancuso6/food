import React, { Component } from 'react';  
import './App.css';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuItem from './Components/MenuItem';
import Search from './Components/Search';
import Product from './Components/Product';

class App extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            selectedCategory: '',
            active: '',
            searched: '',
            productDescription: ''
        }
    }
    
    componentDidMount () {               
        axios.get('https://api.gousto.co.uk/products/v2.0/categories')
          .then(response => {
            this.setState({ categories: response.data.data });
            console.log("categories", this.state.categories);
          })
        .catch((error) => {
           console.log(error);
        });
        
        axios.get('https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120')
          .then(response => {
            this.setState({ products: response.data.data });
            console.log("products", this.state.products);
          })
        .catch((error) => {
           console.log(error);
        });   
    }
    
    searchHandler = (event) => {
        this.setState({searched: event.target.value}, function () {
            console.log(this.state.searched);
        }); 
    }

    showProductsHandler = (title) => {  
        this.setState({selectedCategory: title}, function () {
            console.log("this.state.selectedCategory", this.state.selectedCategory);
        });
        this.setState({ active: title }, function () {
            console.log("active", this.state.active);
        });
        this.setState({searched: ''}, function () {
            console.log("this.state.searched: ", this.state.searched);
        });
    }
    
    showDescriptionHandler = (description, title) => {  
        console.log(description);
        console.log(title);
        
        this.setState({ active: title }, function () {
            console.log("active", this.state.active);
        });
        
        if (this.state.productDescription === description) {
            this.setState({productDescription: ''}, function () {
                console.log("this.state.productDescription", this.state.productDescription);
            }); 
        }
        else {
            this.setState({productDescription: description}, function () {
                console.log("this.state.productDescription", this.state.productDescription);
            }); 
        }
    }
    
    render () {        
        let products = this.state.products.filter(
            (product) => {
                if (this.state.searched) {
                    return product.title.toLowerCase().indexOf(this.state.searched.toLowerCase()) !== -1;
                }
                else {
                    return product.categories[0].title === this.state.selectedCategory;
                }
            }
        );
        
        return (             
          <div className="Main"> 
            <CssBaseline />
            
            <nav className="navbar">                  
                <ul className="navbar-nav">
                    {this.state.categories.map( (category) => { 
                        return (
                            <MenuItem title={category.title} key={category.id} active={this.state.active === category.title ? 'active' : ''} showProducts={this.showProductsHandler.bind(this, category.title)} />
                        );    
                    })}
                </ul>        
            </nav>
                           
            <Search 
                value={this.state.searched} 
                searched={this.searchHandler.bind(this)} />          
                       
            <div>
                <ul>
                    {products.map( (product, index) => {     
                        return (
                            <Product title={product.title} key={product.id} active={this.state.active === product.title ? 'active' : ''} description={product.description} productDescription={this.state.productDescription} toggleDescription={this.showDescriptionHandler.bind(this, product.description, product.title)} />  
                        );      
                    })}
                </ul>
            </div>
                      
          </div>
        );

    } 
}


export default App;

