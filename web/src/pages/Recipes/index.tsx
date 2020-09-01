import React, { useState, useEffect } from 'react';

import './styles.css';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import PhotosList from '../../components/PhotosList';

interface PhotoData {
    id: number;
    name: string;
    path: string;
}

interface RecipeData {
    id: string;
    name: string;
    content: string;
    photos: [PhotoData]
    rate: number;
}

export interface FeaturedData {
    id: number;
    name: string;
    url: string;
    rate: number;
    img: string;
    subFeatured: number;
}

const Recipes: React.FC = () => {
    const [recipe, setRecipe] = useState<RecipeData | null>(null);
    const [featured, setFeatured] = useState<[FeaturedData] | any>([{}]);
    const { subId, recId } = useParams();
    const subFeaturedId = parseInt(subId, 10);
    const recipeId = parseInt(recId, 10);

    useEffect(() => {
        setRecipe(null);
        setFeatured([{}]);

        if (recipeId) {
            // get a list of random recipes
            api.get(`/web/receita/${recipeId}`)
                .then((result: any) => {
                    const { data } = result;
                    const photosData: [PhotoData] = data.fotos.map((item: any) => ({ id: item.codigo, name: item.nome, path: item.url }));
                    const recipeData: RecipeData = { id: data.codigo, name: data.nome, content: data.html, rate: data.nota.nota, photos: photosData };

                    setRecipe(recipeData);
                })
                .catch(err => {
                    toast.warning('Servidor fora do ar');
                })
        } else {
            api.get(`/web/receita/foto/${subFeaturedId}`)
                .then((result: any) => {
                    const { data } = result;
                    const featuredList: [FeaturedData] = data.map((item: any) => ({ id: item.codigo, name: item.nome, url: item.url, rate: item.nota, img: item.capa, subFeatured: item.categoria }))
                    setFeatured(featuredList);
                })
                .catch(err => {
                    toast.warning('Servidor fora do ar');
                })
        }

        // TODO - check recipeId and return a match recipe or return a list of recipes with subFeaturedId.
    }, [subFeaturedId, recipeId]);

    if (recipe) {
        return (
            <article id="page_recipe">
                <h1>{recipe.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: recipe.content }}></p>
                <p>{recipe.rate}</p>
            </article>
        )
    }

    return (
        <PhotosList list={featured} />
    );
}

export default Recipes;