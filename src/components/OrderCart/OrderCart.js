import React from 'react';
import './OrderCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons'

const OrderCart = ({info }) => {
    
   const {name, img} = info;
  
    return (
        <div className='single-pet-info'>
            <img src={img} alt={name} width={'100px'} />
            <h4>{name}</h4>
            <button> <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> </button>
        </div>
    );
};

export default OrderCart;