import React, { useState, useEffect } from 'react';

import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import api from '../../services/api';
import { toast } from 'react-toastify';
import PhotosList from '../../components/PhotosList';
import RateStars from '../../components/RateStars';

import './styles.css';
import RecipeList from '../../components/RecipeList';
const { FacebookProvider, Page } = require('react-facebook');

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
    const [spinner, setSpinner] = useState(true);
    const [recipe, setRecipe] = useState<RecipeData | null>(null);
    const [featured, setFeatured] = useState<[FeaturedData] | any>([{}]);
    const [featuredList, setFeaturedList] = useState<[FeaturedData] | any>([{}]);
    const [others, setOthers] = useState<[FeaturedData] | any>([{}]);
    const { subId, recId } = useParams();
    const subFeaturedId = parseInt(subId, 10);
    const recipeId = parseInt(recId, 10);

    useEffect(() => {
        setRecipe(null);
        setFeatured([{}]);
        setSpinner(true);

        if (recipeId) {
            api.get(`/web/receita/${recipeId}`)
                .then((result: any) => {
                    const { data } = result;
                    const photosData: [PhotoData] = data.fotos.map((item: any) => ({ id: item.codigo, name: item.nome, path: item.url }));
                    const recipeData: RecipeData = { id: data.codigo, name: data.nome, content: data.html, rate: data.nota.nota, photos: photosData };

                    setRecipe(recipeData);
                    setSpinner(false);
                })
                .catch(err => {
                    toast.warning('Servidor fora do ar');
                    setSpinner(false);
                })

            api.get('/web/receita/destaque/3')
                .then((result: any) => {
                    const { data } = result;
                    const featuredList: [FeaturedData] = data.map((item: any) => ({ id: item.codigo, name: item.nome, url: item.url, rate: item.nota, img: item.capa, subFeatured: item.categoria }))
                    setOthers(featuredList);
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
                    setSpinner(false);
                })
                .catch(err => {
                    toast.warning('Servidor fora do ar');
                    setSpinner(false);
                })

            // get a list of recipes without photo
            api.get(`/web/receita/categoria/${subFeaturedId}`)
                .then((result: any) => {
                    const { data } = result;
                    const list: [FeaturedData] = data.map((item: any) => ({ id: item.codigo, name: item.nome, url: item.url, rate: item.nota, img: item.capa, subFeatured: item.categoria }))
                    setFeaturedList(list);
                    setSpinner(false);
                })
                .catch(err => {
                    toast.warning('Servidor fora do ar');
                    setSpinner(false);
                })
        }

        // TODO - check recipeId and return a match recipe or return a list of recipes with subFeaturedId.
    }, [subFeaturedId, recipeId]);

    if (spinner) {
        return (<Spinner />)
    }

    if (recipe) {
        return (
            <React.Fragment>
                <article id="page_recipe">
                    <h1>{recipe.name} <RateStars rate={recipe.rate} /></h1>
                    <div className="settings">
                        {recipe.photos[0] &&
                            <figure>
                                <img src={`https://webeditorapi.tudolinux.com.br${recipe.photos[0].path}`} alt={recipe.photos[0].name} />
                            </figure>
                        }
                        <div className="options">
                            {/* <Link to={'#comments'} title="Ver comentários" >Comentários (234)</Link> */}
                        </div>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: recipe.content }}></p>
                    {/* <section id="comments">
                        <h3>Comentários</h3>
                        <h4>Deixe seu comentário aqui...</h4>
                    </section> */}
                    <div className="others">
                        <h4>Veja também...</h4>
                        <PhotosList list={others} />
                    </div>
                    <div className="fb_page">
                        <FacebookProvider appId="1374793495897967">
                            <Page
                                href="https://www.facebook.com/maisreceitas.com.br"
                                adaptContainerWidth
                            />
                        </FacebookProvider>
                    </div>
                </article>
            </React.Fragment>
        )
    }

    return (
        <section id="page_recipe">
            <h1>Destaques</h1>
            <PhotosList list={featured} />
            <RecipeList list={featuredList} />
        </section>
    );
}

export default Recipes;