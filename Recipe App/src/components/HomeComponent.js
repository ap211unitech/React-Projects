import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe"

const API_ID = "4f7e0920"
const API_KEY = "93d11fb1afcd36f34ce1a4bb7b30deb3"


function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipe();
    }, [])


    const getRecipe = async () => {
        const example = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
        const response = await fetch(example);
        let recipe = await response.json();
        setRecipes(recipe.hits);
    }


    return (
        <div>
            Arjun Porwal
        </div>
    )
}

export default Home