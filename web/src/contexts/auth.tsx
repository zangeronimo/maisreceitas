import React, { createContext, useState, useEffect, useContext } from 'react';

import jwt from 'jsonwebtoken';

import api from '../services/api';
import PacmanLoader from "react-spinners/PacmanLoader";
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import logo from '../assets/images/maisreceitas.png';

interface AuthContextData {
    Query(data: string, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<any>>;
    setToggled(): void;
    toggled: boolean;
    isMobile(): boolean;
}

interface JWTData {
    id: number,
    name: string,
    email: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [toggled, setToggledFlag] = useState(false);

    useEffect(() => {
        signIn()
            .then(_ => {
                setLoading(false);
            })
            .catch(_ => {
                setLoading(false);
            })

        if (isMobile()) {
            setToggledFlag(true);
        }
    }, []);

    async function Query(data: string, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<any>> {
        // if token is Invalid, get another on
        if (isInvalidToken()) {
            try {
                await signIn();
            } catch (e) {
                return Promise.reject(new Error('Sessão expirada'));
            }
        }
        const token = localStorage.getItem('token');
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        return await api.post('/', { query: data }, { ...config, headers });
    }

    const isInvalidToken = () => {
        const token = localStorage.getItem('token');

        return !token || jwtIsExpired(token);
    }

    function jwtIsExpired(token: string) {
        const jwtData: JWTData | any = jwt.decode(token);

        if (Date.now() >= jwtData.exp * 1000 - 5000) {
            return true;
        }

        return false;
    }

    async function signIn() {
        const headers = {
            'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA==',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const data = "grant_type=password&username=maisreceitas@tudolinux.com.br&password=senha";
        await api.post("/oauth/token", data, { headers })
            .then(result => {
                //Get the token and save him on localstorage
                try {

                    if (result.data['errors']) { throw new Error("Acesso negado"); }

                    const { access_token } = result.data;
                    localStorage.setItem('token', access_token);

                    api.defaults.headers = {
                        'Authorization': `Bearer ${access_token}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    };
                } catch (_) {
                    toast.warning('acesso negado');
                }
            })
            .catch(_ => {
                toast.warning('acesso negado')
            })
    }

    if (loading) {
        return (
            <div id="loader">
                <img className="logo" src={logo} alt="maisreceitas.com.br" />
                <PacmanLoader
                    size={32}
                    color={"#bbb"}
                    loading={loading}
                />
            </div>
        );
    }

    function isMobile() {
        const windowWidth = window.innerWidth;

        return windowWidth < 640;
    }

    function setToggled() {
        setToggledFlag(!toggled);
    }

    return (
        <AuthContext.Provider value={{ setToggled, toggled, isMobile, Query }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}