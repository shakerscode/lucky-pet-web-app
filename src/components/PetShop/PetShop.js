import React, { useEffect, useState } from 'react';
import PetsDataShowing from '../PetsDataShowing/PetsDataShowing';
import './PetShop.css'

const PetShop = () => {
    const [pets, setCat] = useState([]);

    useEffect(() => {
        fetch('petsfakedata.json')
            .then(res => res.json())
            .then(data => setCat(data));

    }, [])
    return (
        <div className='container'>
            <h1 className='shop-header'>Choose Your Favourite One</h1>
            <div className='pet-shop'>
            <div className='first-half'>
                {
                    pets.map(pet => <PetsDataShowing key={pet.id} pet={pet}></PetsDataShowing>)
                }
            </div>
            <div className='last-half'>
                <h3>Your Cart</h3>
            </div>
        </div>
        </div>
    );
};

export default PetShop;