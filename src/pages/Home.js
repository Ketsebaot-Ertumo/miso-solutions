import React, { useState } from 'react';
import Navbar from "../components/Navbar";


const Home = () => {
    
    return(
        <>
            < Navbar />
            
            <div className="App">
                <header className="App-header bg-black text-white">
                    <h1>Miso Software Solutions</h1>
                </header>
            </div>
        </>
    )
}

export default Home;