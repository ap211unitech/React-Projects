import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { List, ListItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "500px",
    },
    chip: {
        marginLeft: 10
    }
});


function Recipe(props) {

    return (
        <Container>
            <Card>
                <Box display="flex" flexWrap="wrap" flexDirection="row" mb={4}>
                    <div id="maincard" className={useStyles().root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={props.recipe.label}
                                height="320"
                                image={props.recipe.image}
                                title={props.recipe.label}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.recipe.label}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography variant="body1" color="textSecondary" component="p" className={useStyles().chip}>
                                Calories
                    </Typography>
                            <Chip label={props.recipe.calories.toFixed(2)} color="primary" />
                        </CardActions>
                    </div>
                    <div>
                        <List style={{ margin: "10px", marginTop: -1.9 }} >
                            {props.recipe.ingredientLines.map(ingd => (
                                <ListItem style={{ fontFamily: "Arial", display: "flex", alignItems: "center" }} key={Math.random()} >
                                    <div style={{ width: "8px", height: "8px", background: "#3f51b5", borderRadius: "50%", marginRight: "5px", marginTop: "1px" }} />
                                    {ingd}
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Box>
            </Card>
            <br />
        </Container >
    )
}

export default Recipe
