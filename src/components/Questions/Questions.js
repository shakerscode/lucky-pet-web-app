import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container'>
            <div className='question-container'>
                <div>
                    <h1>How React Works?</h1>
                    <p><b>Answer:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptas eos minima enim fuga quasi tempora voluptatibus sint! Adipisci, aliquid?</p>
                </div>
                <div>
                    <h1>What is the difference between props and state?</h1>
                    <p><b>Answer:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptas eos minima enim fuga quasi tempora voluptatibus sint! Adipisci, aliquid?</p>
                </div>
                <div>
                    <h1>How useState Works?</h1>
                    <p><b>Answer:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptas eos minima enim fuga quasi tempora voluptatibus sint! Adipisci, aliquid?</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;