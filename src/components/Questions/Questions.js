import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container'>
            <div className='question-container'>
                <div>
                    <h1>How React Works?</h1>
                    <hr className='hr' />
                    <p><b>Answer:</b> React is a JS library that build user interfaces. React library creates react element. React Dom receive those element and render them to the browser.  React has it's own virtual DOM. React compares Browser DOM with virtual DOM and makes a list of things that have changed or need to be updated. Than within a one process, React updates them according to that list.</p>
                </div>
                <div>
                    <h1>What is the difference between props and state?</h1>
                    <hr className='hr' />
                    <p><b>Answer:</b> Though, State and Props contain data, but there are some important difference between them. <br />
                        <b>State: </b>
                        State contain the data of a component. The hole components data depends of a state. State store data inside itself. That's why it's called the heart of a component. State is mutable and it's data can be changed. <br />
                        <hr  className='hr' />
                        <b>Props: </b>
                        On the other hand, Props contain the stats data and it is used for pass data from one component to other component. Props are immutable. You can't change props data inside of a component. It is an object that used inside of html elements or JSX.  </p>
                </div>
                <div>
                    <h1>How useState Works?</h1>
                    <hr className='hr' />
                    <p><b>Answer:</b> useState gives us two things by distracting. One is the name of the state and the other is the function of the state. Through the function the state changes its own value and sets the value to the state's name. We can get all the information of the state through the name of the state.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;