import React, { useEffect, useState } from 'react';
import './styles.css';
import Input from '../../components/Input';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { FeaturedData } from '../Recipes';
import PhotosList from '../../components/PhotosList';
const { FacebookProvider, Page } = require('react-facebook');

function Home() {
    const [featured, setFeatured] = useState<[FeaturedData] | any>([{}]);

    useEffect(() => {
        // get a list of random recipes
        api.get('/web/receita/destaque/6')
            .then((result: any) => {
                const { data } = result;
                const featuredList: [FeaturedData] = data.map((item: any) => ({ id: item.codigo, name: item.nome, url: item.url, rate: item.nota, img: item.capa, subFeatured: item.categoria }))
                setFeatured(featuredList);
            })
            .catch(err => {
                toast.warning('Servidor fora do ar');
            })
    }, []);

    let timeout: any = 0;
    const onFilter = (value: string) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            console.log(value);
        }, 500);
    }
    return (
        <div id="home_page">
            <header>
                <h3>
                    <Input
                        onChange={(e) => onFilter(e.target.value)}
                        label="O que deseja cozinhar hoje?"
                        name="filter"
                    />
                </h3>
                <div className="fb_page">
                    <FacebookProvider appId="1374793495897967">
                        <Page
                            href="https://www.facebook.com/maisreceitas.com.br"
                            adaptContainerWidth
                        />
                    </FacebookProvider>
                </div>
            </header>
            <PhotosList list={featured} />
        </div >
    );
}

export default Home;