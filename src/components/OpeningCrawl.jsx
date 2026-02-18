import React, {useEffect, useState} from 'react';
import {linkApi} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const episodes = Math.floor(Math.random() * 6) + 1;
        fetch(`${linkApi}/v1/films/${episodes}`)
            .then(response => response.json())
            .then(data => setOpeningCrawl(data.opening_crawl))
            .catch(() => setOpeningCrawl('Error loading opening crawl'));
    }, [])

    if(openingCrawl) {
        return (
            <p className="far-galaxy">{openingCrawl}</p>
        );
    }else {
        return (
            <p className="far-galaxy">
                <span className={'spinner-border spinner-border-sm'}></span>
                <span className={'spinner-grow spinner-grow-sm'}>Loading...</span>
            </p>
        )
    }

};

export default OpeningCrawl;