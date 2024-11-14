import React from 'react';
import add from './add.svg';


export default function FAQ(){
    return (
        <div className="pt-10 pl-48">
            <h1 style={{fontSize: '32px', fontFamily :'ADLaM Display'}}><b>Frequently Asked Questions</b></h1>
            <p>What is the purpose of this website?</p>
            <p>This website is a demo for the purpose of learning how to use React and Firebase together.</p>
            <p>What is React?</p>
            <p>React is a JavaScript library for building user interfaces.</p>
            <p>What is Firebase?</p>
            <p>Firebase is a platform developed by Google for creating mobile and web applications.</p>
        </div>
    )
}