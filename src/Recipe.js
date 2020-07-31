import React from 'react';
import './Recipe.css'


const Recipe = ({title, cal, image, ingredients}) => {
    return(
        <div className="Recipe-card">
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p>{cal}</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;