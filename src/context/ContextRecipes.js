import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ContextRecipes = createContext();

const RecipesProvider = (props) => {

    const [recipes, saveRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        name: '',
        category: ''
    })
    const [check, saveCheck] = useState(false)

    const {name, category} = search

    useEffect(() => {
        if (check) {     
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`

                const result = await axios.get(url)

                saveRecipes(result.data.drinks)
            }
            getRecipes()
        }
    }, [search])

    return (
        <ContextRecipes.Provider value={{
            recipes, searchRecipes, saveCheck
        }}>
            {props.children}
        </ContextRecipes.Provider>
    )
}

export default RecipesProvider;