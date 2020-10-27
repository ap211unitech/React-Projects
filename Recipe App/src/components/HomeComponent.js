import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import { Container } from '@material-ui/core';
import SearchRecipe from "./SearchRecipe";

const API_ID = "4f7e0920"
const API_KEY = "93d11fb1afcd36f34ce1a4bb7b30deb3"


function Home() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipe();
    }, [query])

    const SearchRecipe = (val) => {
        setQuery(val);
    }

    const getRecipe = async () => {
        const example = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
        const response = await fetch(example);
        let recipe = await response.json();
        setRecipes(recipe.hits);
    }


    return (
        <Container maxWidth="sm">
            <SearchRecipe search={(val) => SearchRecipe(val)} />
            {recipes.map(recipe => {
                <Recipe recipe={recipe.recipe} />
            })}
        </Container>
    )
}

export default Home