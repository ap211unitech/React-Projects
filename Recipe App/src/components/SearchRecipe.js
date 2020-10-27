import React, { useState } from 'react';
import { Box, Button, Input } from '@material-ui/core';


function SearchRecipe({ search }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        search(text);
    }

    return (
        <Box display="flex" justifyContent="center" m={2}>
            <form onSubmit={handleSubmit}>
                <Input value={text} onChange={e => setText(e.target.value)} placeholder="Search..." />
                <Button type="submit" color="primary" >
                    Search
                </Button>
            </form>
        </Box>
    )
}

export default SearchRecipe
