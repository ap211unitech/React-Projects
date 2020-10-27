import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import { Box, makeStyles } from '@material-ui/core';
import SearchRecipe from "./SearchRecipe";

const API_ID = "4f7e0920"
const API_KEY = "93d11fb1afcd36f34ce1a4bb7b30deb3"

const styles = makeStyles({
    recipes: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    }
})


function Home() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipe();
    }, [query])

    const search = (val) => {
        setQuery(val);
    }

    const getRecipe = () => {
        const example = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
        fetch(example)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.hits)
            })
            .catch(err => { console.log(err) })
    }


    return (
        <div>
            <SearchRecipe search={(val) => search(val)} />
            <div>
                <Box className={styles().recipes} >
                    {recipes.map(recipe => (
                        <Box key={recipe.recipe.calories} m={2}>
                            <Recipe recipe={recipe.recipe} />
                        </Box>
                    ))}
                </Box>
            </div>
        </div>

    )
}

export default Home