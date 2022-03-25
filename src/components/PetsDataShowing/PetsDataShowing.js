import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './PetsDataShowing.css'


const PetsDataShowing = ({pet}) => {
    const {name, img, category, price} = pet
    return (
        <div className='pets'>
            <img src={img} alt="pet-img" width={'250px'} />
            <h3>{name}</h3>  
            <p>Category: {category}</p> 
            <p>Price: {price}$</p>  
            <button className='add-to-cart-btn'>Add To Cart  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> </button>       
        </div>
    );
};

export default PetsDataShowing;