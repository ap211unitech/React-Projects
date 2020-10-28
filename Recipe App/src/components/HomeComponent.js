import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import { Box, CircularProgress } from '@material-ui/core';
import SearchRecipe from "./SearchRecipe";

const API_ID = "4f7e0920"
const API_KEY = "93d11fb1afcd36f34ce1a4bb7b30deb3"



function Home() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.hits);
                setLoading(false);
            })
            .catch(err => { console.log(err) })
    }, [query])

    const search = (val) => {
        setQuery(val);
    }


    return (
        <div>
            <SearchRecipe search={(val) => search(val)} />

            {!isLoading && recipes.length === 0 &&
                <Box display="flex" justifyContent="center">
                    <h1>No Image Found..</h1>
                </Box>
            }

            {isLoading ?
                <Box display="flex" justifyContent="center" mt={5}>
                    <CircularProgress />
                </Box> :
                <div>
                    <Box display="flex" justifyContent="center" flexWrap="wrap" alignItems="center" >
                        {recipes.map(recipe => (
                            <Box key={recipe.recipe.calories} m={2}>
                                <Recipe recipe={recipe.recipe} />
                            </Box>
                        ))}
                    </Box>
                </div>
            }
        </div>

    )
}

export default Home