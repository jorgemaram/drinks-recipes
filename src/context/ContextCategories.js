import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear Context

export const ContextCategories = createContext();

// Provider es donde se encuentran funciones y state

const CategoriesProvider = (props) => {
    
    //crear state del context

    const [categories, setCategories] = useState([]);

    //ejecutar llamado a la api
    useEffect(() => {

        const getCategories = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categories = await axios.get(url);
            setCategories(categories.data.drinks)
        }
        getCategories();
    }, [])

    return (
        <ContextCategories.Provider
            value={{ categories}}
        >
        {props.children}
        </ContextCategories.Provider>

    )
}

export default CategoriesProvider;