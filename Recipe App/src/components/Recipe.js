import React from 'react'

function Recipe(props) {
    console.log(props.recipe,"IN recipe")
    return (
        <div>
            <h1>Title</h1>
            <p>Calories</p>
            <img src={props.recipe.image} alt="" />
        </div>
    )
}

export default Recipe
