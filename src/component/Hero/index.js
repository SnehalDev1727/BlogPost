import React from 'react';
import './style.css';
import Card from '../UI/card';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Hero=(props)=>{
    return (
        <div>
            <Card>
                <div style={{padding:'50px 0px'}}>
                <Logo/>
                </div>
               
               <Navbar/>
            </Card>
        </div>
    )
}
export default Hero;