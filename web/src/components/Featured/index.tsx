import React from 'react';

import { FeaturedData } from '../../pages/Recipes';

import './styles.css';
import { Link } from 'react-router-dom';
import RateStars from '../RateStars';

interface FeaturedProps {
    item: FeaturedData
}

const Featured: React.FC<FeaturedProps> = ({ item }) => {
    return (
        <section>
            <Link to={`/receitas/${item.subFeatured}/${item.id}/${item.url}`} title={item.name}>
                <article className="featured_card">
                    <figure>
                        {item.img && <img src={`https://webeditorapi.tudolinux.com.br${item.img}`} alt={item.name} />}
                        <figcaption>{item.name}</figcaption>
                    </figure>
                    <RateStars rate={item.rate} />
                </article>
            </Link>
        </section>
    );
}

export default Featured;