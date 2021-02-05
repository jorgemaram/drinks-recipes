import React, {createContext, useState, useEffect} from 'react';

//Crear Context

export const ContextCategories = createContext();

// Provider es donde se encuentran funciones y state

const CategoriesProvider = (props) => {
    
    //crear state del context

    const [categories, setCategories] = useState([]);

    //ejecutar llamado a la api

    return (
        <ContextCategories.Provider
        value={{hola}}
        >
        {props.children}
        </ContextCategories.Provider>

    )
}

export default CategoriesProvider;