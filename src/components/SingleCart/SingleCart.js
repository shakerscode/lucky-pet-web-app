import React from 'react';
import './SingleCart.css'

const SingleCart = ({favPet}) => {
    console.log(favPet)
    const {name, img} = favPet;
    return (
        <div className='single-pet'>
            <h4>Your Lucky Pet</h4>
            <img src={img}  width={'100px'} />  
            <h5>{name}</h5>

        </div>
    );
};

export default SingleCart;