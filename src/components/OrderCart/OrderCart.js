import React from 'react';

const OrderCart = ({petInfo}) => {
   
    let name = {};
     for(const info of petInfo){
         const newName = info.name;
         name = newName;
     }
    return (
        <div>
            <h3>Order Details</h3>
        </div>
    );
};

export default OrderCart;