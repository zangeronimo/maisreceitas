import React, { useState, useEffect } from 'react';

import './styles.css';
import { useParams } from 'react-router-dom';

const Recipes: React.FC = () => {
    const [recipe, setRecipe] = useState("");
    const [recipes, setRecipes] = useState([{}]);
    const { subId, recId } = useParams();

    useEffect(() => {
        const subFeaturedId = parseInt(subId, 10);
        const recipeId = parseInt(recId, 10);

        // TODO - check recipeId and return a match recipe or return a list of recipes with subFeaturedId.
    }, [subId, recId]);


    return (
        <article id="page_recipe">
            <h1>Title</h1>
            <p>Content</p>
            <p>Settings</p>
        </article>
    )
}

export default Recipes;