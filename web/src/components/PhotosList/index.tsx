import React from 'react';
import { FeaturedData } from '../../pages/Recipes';

import './styles.css';
import Featured from '../Featured';

interface PhotosListProps {
    list: [FeaturedData];
}

const PhotosList: React.FC<PhotosListProps> = ({ list }) => {
    return (
        <div className="featured_list">
            {list && list.map((item: FeaturedData, index: number) => {
                return (<Featured key={index} item={item} />);
            })}
        </div>
    );
}

export default PhotosList;