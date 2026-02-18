import React, {useEffect, useState} from 'react';
import {linkApi} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState();
    useEffect(() => {
        fetch(`${linkApi}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => setAboutMe(data))
    }, []);
    if (!aboutMe) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>{aboutMe.name}</h1>
            <p>Gender: {aboutMe.gender}</p>
            <p>Birth year: {aboutMe.birth_year}</p>
            <p>Height: {aboutMe.height}</p>
            <p>Mass: {aboutMe.mass}</p>
            <p>Hair color: {aboutMe.hair_color}</p>
            <p>Eye color: {aboutMe.eye_color}</p>
            <p>Skin color: {aboutMe.skin_color}</p>
        </div>
    );
};

export default AboutMe;