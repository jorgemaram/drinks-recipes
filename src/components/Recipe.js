import React, { useContext, useState } from 'react';
import { ContextModal } from '../context/ContextModal';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ recipe }) => {


    //Configuración del modal de material-ui

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    //extraer valores del context
    const { recipeinfo, saveRecipeId, saveRecipe } = useContext(ContextModal);

    //Muestra y formatea los ingredientes
    const showIngredients = recipeinfo => {
        let ingredients = []
        for (let i = 1; i < 16; i++){
            if (recipeinfo[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{recipeinfo[`strIngredient${i}`]} {recipeinfo[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    }

    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{recipe.strDrink}</h2>
                <img className='card-img-top' src={recipe.strDrinkThumb} alt={`Representation of ${recipe.strDrinkThumb}`} />

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={() => {
                            saveRecipeId(recipe.idDrink);
                            handleOpen();
                        }}
                    >See details
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            saveRecipeId(null);
                            saveRecipe({});
                            handleClose();
                        }}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeinfo.strDrink}</h2>
                            <h3 className='mt-4'>Instructions</h3>
                            <p>{recipeinfo.strInstructions}</p>
                            <img className='img-fluid my-4' src={recipeinfo.strDrinkThumb} alt={`Representation of ${recipe.strDrinkThumb}`}/>
                            <h3>Ingredients and measures</h3>
                            <ul>{showIngredients(recipeinfo)}</ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;