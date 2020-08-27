import React from 'react';
import './styles.css';
import Input from '../../components/Input';

function Home() {

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
        <React.Fragment>
            <h3>
                <Input
                    onChange={(e) => onFilter(e.target.value)}
                    label="O que deseja cozinhar hoje?"
                    name="filter"
                />
            </h3>
        </React.Fragment>
    );
}

export default Home;