import React, { useEffect, useState } from 'react';
import OrderCart from '../OrderCart/OrderCart';
import PetsDataShowing from '../PetsDataShowing/PetsDataShowing';
import './PetShop.css'

const PetShop = () => {
    //this state for loading data
    const [pets, setCat] = useState([]);


    useEffect(() => {
        fetch('petsfakedata.json')
            .then(res => res.json())
            .then(data => setCat(data));

    }, [])
    //this state for loading pet  details
    const [petInfo, setPetInfo] = useState([]);


    const addToCartBtn = (pet) => {

        const newPetInfoCart = [...petInfo, pet];
        setPetInfo(newPetInfoCart);
    }

    //This is choose fav one btn
    const [favOne, setFavOne] = useState([]);
    console.log(favOne);


    const chooseBtn = (petInfos) => {
        const randomNum = Math.floor(Math.random() * 4);
        const newFav = (petInfos[randomNum]);
        setFavOne(newFav);

    }


    return (
        <div className='container'>
            <h1 className='shop-header'>Choose Your Favourite One</h1>
            <div className='pet-shop'>
                <div className='first-half'>
                    {
                        pets.map(pet => <PetsDataShowing key={pet.id} pet={pet} addToCartBtn={addToCartBtn}></PetsDataShowing>)
                    }
                </div>
                <div className='last-half'>
                    <h3>Order Details</h3>
                    {
                        petInfo.map((info) => <OrderCart favOne={favOne} key={info.key} info={info}></OrderCart>)
                    }
                    <button className='btn' onClick={() => chooseBtn(petInfo)} >Choose Best One</button> <br />
                    <button className='btn' >Choose Again</button>

                </div>
            </div>
        </div>
    );
};

export default PetShop;