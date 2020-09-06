import React from 'react';
import { FeaturedData } from '../../pages/Recipes';

import './styles.css';
import { Link } from 'react-router-dom';
import RateStars from '../RateStars';

interface RecipeListProps {
    list: [FeaturedData]
}

const RecipeList: React.FC<RecipeListProps> = ({ list }) => {
    return (
        <div className="wrapper">
            <div className="table">
                <div className="row header blue">
                    <div className="cell">Receitas</div>
                    <div className="cell"></div>
                </div>

                {list.map(
                    (item: FeaturedData) => {
                        return (
                            <div key={item.id} className="row">

                                <div className="cell" data-title="Receita">
                                    <Link to={`/receitas/${item.subFeatured}/${item.id}/${item.url}`} title={item.name}>{item.name}</Link>
                                </div>
                                <div className="cell" data-title=""><RateStars rate={item.rate} /></div>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default RecipeList;