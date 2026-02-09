import React from 'react';
import hero from "../assets/main.jpg";

const Hero = () => {
    return (
        <section className="float-start w-25 mt-1 me-3">
            <img src={hero} alt="Luke Skywalker" className="w-100"/>
        </section>
    );
};

export default Hero;