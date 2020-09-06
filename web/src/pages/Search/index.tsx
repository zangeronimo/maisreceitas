import React, { useEffect, useState } from 'react';

import './styles.css';
import { FeaturedData } from '../Recipes';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import Spinner from '../../components/Spinner';
import Input from '../../components/Input';
import PhotosList from '../../components/PhotosList';
import RecipeList from '../../components/RecipeList';

const Search: React.FC = () => {
    const [featured, setFeatured] = useState<[FeaturedData] | any>([{}]);
    const [featuredList, setFeaturedList] = useState<[FeaturedData] | any>([{}]);
    const [spinner, setSpinner] = useState(true);
    const history = useHistory();
    const { search } = useParams();

    useEffect(() => {
        setSpinner(true);

        // get a list of recipes with photo
        api.get(`/web/receita/foto/?nome=${search}`)
            .then((result: any) => {
                const { data } = result;
                const list: [FeaturedData] = data.map((item: any) => ({ id: item.codigo, name: item.nome, url: item.url, rate: item.nota, img: item.capa, subFeatured: item.categoria }))
                setFeatured(list);
                setSpinner(false);
            })
            .catch(err => {
                toast.warning('Servidor fora do ar');
                setSpinner(false);
            })

        // get a list of recipes without photo
        api.get(`/web/receita/?nome=${search}`)
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
    }, [search]);

    let timeout: any = 0;
    const onFilter = (value: string) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            value && history.push(`/pesquisar/${value}`)
        }, 1000);
    }

    if (spinner) {
        return (<Spinner />);
    }

    return (
        <div id="home_page">
            <header>
                <h3>
                    <Input
                        onChange={(e) => onFilter(e.target.value)}
                        label="O que deseja cozinhar hoje?"
                        name="filter"
                        autoFocus
                    />
                </h3>
            </header>
            <PhotosList list={featured} />
            <RecipeList list={featuredList} />
        </div >
    );
}

export default Search;