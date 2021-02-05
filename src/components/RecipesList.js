import React, { useContext } from 'react';
import Recipe from './Recipe';
import { ContextRecipes } from '../context/ContextRecipes';

const RecipesList = () => {

    //extraer recetas
    const { recipes } = useContext(ContextRecipes);

    return (
        <div className='row mt-5'>
            {recipes.map(recipe => (
                <Recipe key={recipe.idDrink} recipe={recipe}/>
            ))}
        </div>
    );
}

export default RecipesList;