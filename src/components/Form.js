import React, { useContext } from 'react';
import { ContextCategories} from '../context/ContextCategories'

const Form = () => {

    const {hola } = useContext(ContextCategories);

    
    return ( 
        <form className='col-12 mt-4'>
            <fieldset className='text-center'>
                <legend>Look for Category or Ingredients</legend>
            </fieldset>
            <div className='row'>
                <div className='col-md-4'>
                    <input name='name' className='form-control' type='text' placeholder='Look for ingredients'/>
                </div>
                <div className='col-md-4'>
                    <select name='category' className='form-control'>
                        <option value=''>--Choose a category--</option>
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