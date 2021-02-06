import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//crear context

export const ContextModal = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [recipeid, saveRecipeId] = useState(null);
    const [recipeinfo, saveRecipe] = useState({});

    //una vez que hay receta, llamar a la API

    useEffect(() => {
        const getRecipe = async () => {
            if (!recipeid) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeid}`

            const result = await axios.get(url);

            saveRecipe(result.data.drinks[0])

        }
        getRecipe();

    }, [recipeid])

    return (
        <ContextModal.Provider value={{ recipeinfo, saveRecipeId, saveRecipe}}>
            {props.children}
        </ContextModal.Provider>
    )
}

export default ModalProvider;