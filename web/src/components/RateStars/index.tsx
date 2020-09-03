import React from 'react';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';

import './styles.css';

interface RateStarsProps {
    rate: number
}

const RateStars: React.FC<RateStarsProps> = ({ rate }) => {
    const control = [2, 4, 6, 8, 10];

    return (
        <div className="rate_on">
            {control.map((star: number, index: number) => {
                if (star <= rate) {
                    return (<MdStar key={index} />);
                }
                if (star > rate && (star - 2) <= rate) {
                    return (<MdStarHalf key={index} />);
                }
                return (<MdStarBorder key={index} />);
            })
            }
        </div>
    );
}

export default RateStars;