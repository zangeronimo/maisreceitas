import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";


import { MdStarBorder, MdStarHalf, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FeaturedData } from '../../pages/Recipes';

import './styles.css';

interface FeaturedProps {
    item: FeaturedData
}

const Featured: React.FC<FeaturedProps> = ({ item }) => {
    const control = [2, 4, 6, 8, 10];


    return (
        <div id="loader">
            <PacmanLoader
                size={16}
                color={"#bbb"}
            />
        </div>
    )

}

export default Featured;