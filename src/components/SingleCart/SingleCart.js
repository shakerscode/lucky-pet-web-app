import React from 'react';
import './SingleCart.css'

const SingleCart = ({favPet}) => {
    const {name, img, price, category} = favPet;
    return (
        <div className='single-pet'>
            <h4>Your Lucky Pet</h4>
            <img src={img}  width={'100px'} />  
            <h3>{name}</h3>
            <p>Categoty: {category}</p>
            <p>Price: {price}$</p>
        </div>
    );
};

export default SingleCart;