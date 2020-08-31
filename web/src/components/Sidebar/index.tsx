import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/auth';
import { Link } from 'react-router-dom';

import './styles.css';
import MenuItem from './MenuItem';
import api from '../../services/api';
import { toast } from 'react-toastify';

interface SidebarProps {
    width?: string;
}

interface Category {
    id: number;
    name: string;
    subCategories: [{
        id: number;
        name: string;
        url: string;
    }]
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const { toggled, setToggled, isMobile } = useAuth();
    const [categories, setCategories] = useState<[Category] | any>([{}]);
    const widthDefault = isMobile() ? '100%' : '25rem';

    useEffect(() => {
        const cats: any[] = [];

        api.get('/web/receita_categoria/nivel')
            .then((result: any) => {
                const data: [any] = result.data;
                if (data.length > 0) {
                    data.forEach((item: any) => {
                        const subCategories = item.categorias.map((cat: any) => ({
                            id: cat.codigo,
                            name: cat.nome,
                            url: cat.url,
                        }));
                        cats.push({ id: item.codigo, name: item.nome, subCategories });
                    })
                    setCategories(cats);
                }
            })
            .catch(err => {
                toast.warning("Sem comunicação com o servidor");
            })
    }, []);

    if (toggled) {
        return (<React.Fragment></React.Fragment>);
    }

    let width = props.width ? props.width : widthDefault;

    const sidebarStyles = {
        width: `${width}`,
    };

    return (
        <nav id="sidebar_component" style={sidebarStyles}>
            {categories && categories.map((item: Category, index: number) => {
                return (
                    <div key={index}>
                        <MenuItem id={item.id} title={item.name}>
                            {item.subCategories && item.subCategories.map((sub: any, index: number) => {
                                return (
                                    <Link key={index} className="link" to={`/receitas/${sub.id}/${sub.url}`} title={sub.name} onClick={setToggled}>{sub.name}</Link>
                                )
                            })}
                        </MenuItem>
                    </div>
                );
            })}
        </nav>
    );
}

export default Sidebar;