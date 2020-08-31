import React from 'react';

import { FeaturedData } from '../../pages/Home';

import './styles.css';
import { MdStarBorder, MdStarHalf, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface FeaturedProps {
    item: FeaturedData
}

const Featured: React.FC<FeaturedProps> = ({ item }) => {
    const control = [2, 4, 6, 8, 10];

    const calculateRate = (rate: number) => {
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

    return (
        <Link to={`/receitas/${item.subFeatured}/${item.id}/${item.url}`}>
            <article className="featured_card">
                <figure>
                    {item.img && <img src={`https://webeditorapi.tudolinux.com.br${item.img}`} alt={item.name} />}
                    <figcaption>{item.name}</figcaption>
                </figure>
                {calculateRate(item.rate)}
            </article>
        </Link>
    );
}

export default Featured;