import React, { useEffect, useState } from 'react';
import OrderCart from '../OrderCart/OrderCart';
import PetsDataShowing from '../PetsDataShowing/PetsDataShowing';
import SingleCart from '../SingleCart/SingleCart';
import './PetShop.css'

const PetShop = () => {
    //this state for loading data
    const [pets, setPet] = useState([]);



    useEffect(() => {
        fetch('petsfakedata.json')
            .then(res => res.json())
            .then(data => setPet(data));

    }, [])

    //this state for loading pet  details
    const [petInfo, setPetInfo] = useState([]);

    const addToCartBtn = (pet) => {

        const newPetInfoCart = [...petInfo, pet];
        if (newPetInfoCart.length <= 4) {
            setPetInfo(newPetInfoCart);
        }
        else {
            alert('You are not able to add more then four items.')
        };
    }

    //This is choose favOne btn
    const [favOne, setFavOne] = useState([]);



    const chooseBtn = (petInfos) => {
        const randomNum = Math.floor(Math.random() * 3);
        const newFav = (petInfos[randomNum]);
        setFavOne(newFav);
        setPetInfo([newFav]);

    }

    //This is remove btn
    const removeBtn = () => {
        setPetInfo([]);
        setFavOne([])
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
                    <div className='single-item'>
                        <SingleCart favPet={favOne}></SingleCart>
                    </div>
                    <h3>Your Pet Details</h3>
                    {
                        petInfo.map((info) => <OrderCart key={info.key} info={info} favInfo={favOne} ></OrderCart>)
                    }
                    <button className='btn' onClick={() => chooseBtn(petInfo)} >Choose Best One</button> <br />
                    <button className='btn' onClick={() => removeBtn()} >Choose Again</button>

                </div>
            </div>
        </div>
    );
};

export default PetShop;