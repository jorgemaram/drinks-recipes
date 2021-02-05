import React from 'react';

const Recipe = ({recipe}) => {
    return ( 
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{recipe.strDrink}</h2>
                <img className='card-img-top' src={recipe.strDrinkThumb} alt={`Image of ${recipe.strDrinkThumb}`} />
                
                <div className='card-body'>
                    <button type='button' className='btn btn-block btn-primary'>See details</button>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;