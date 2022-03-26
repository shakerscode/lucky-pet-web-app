import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container'>
            <div className='question-container'>
                <div>
                    <h1>How React Works?</h1>
                    <hr className='hr' />
                    <p><b>Answer:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptas eos minima enim fuga quasi tempora voluptatibus sint! Adipisci, aliquid?</p>
                </div>
                <div>
                    <h1>What is the difference between props and state?</h1>
                    <hr className='hr' />
                    <p><b>Answer:</b> Though, State and Props contain data, but there are some important difference between them. <br />
                    <hr className='hr-in-p' />
                        <b>State: </b>
                        State contain the data of a component. The hole components data depends of a state. State store data inside itself. That's why it's called the heart of a component. State is mutable and it's data can be changed. <br />
                        <hr  className='hr' />
                        <b>Props: </b>
                        On the other hand, Props contain the stats data and it is used for pass data from one component to other component. Props are immutable. You can't change props data inside of a component. It is an object that used inside of html elements or JSX.  </p>
                </div>
                <div>
                    <h1>How useState Works?</h1>
                    <hr className='hr' />
                    <p><b>Answer:</b> Usstate gives us two things by distracting. One is the name of the state and the other is the function of the state. Through the function the state changes its own value and sets the value to the state's name. We can get all the information of the state through the name of the state.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;