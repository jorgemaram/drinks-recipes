import React, { useContext, useState } from 'react';
import { ContextCategories} from '../context/ContextCategories'
import { ContextRecipes} from '../context/ContextRecipes'

const Form = () => {

    const [search, setSearch] = useState({
        name: '',
        category: ''
    });
    const { categories } = useContext(ContextCategories);
    const { searchRecipes, saveCheck } = useContext(ContextRecipes);

    //función para leer los contenidos
    const getRecipeData = e => {
        setSearch({
            ...search, [e.target.name] : e.target.value
        })
    }

    return ( 
        <form className='col-12 mt-4'
            onSubmit={e => {
                e.preventDefault();
                searchRecipes(search);
                saveCheck(true);
            }}>
            <fieldset className='text-center'>
                <legend>Look for Category or Ingredients</legend>
            </fieldset>
            <div className='row'>
                <div className='col-md-4'>
                    <input name='name' className='form-control' type='text' placeholder='Look for ingredients' onChange={getRecipeData}/>
                </div>
                <div className='col-md-4'>
                    <select name='category' className='form-control' onChange={getRecipeData}>
                        <option value=''>--Choose a category--</option>
                        {categories.map(category => (
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input className='btn btn-block btn-primary' type='submit' value='Search your drinks'/>
                </div>
            </div>
        </form>
     );
}
 
export default Form;