import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip"


const labels = (props) => {
    return (
        <Chip label={props} variant="outlined" color="primary" />
    )
}


const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    chip: {
        marginTop: -20,
        marginLeft: 10
    }
});


function Recipe(props) {
    return (
        <Container maxWidth="sm">
            <Card className={useStyles().root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.recipe.label}
                        height="200"
                        width="300"
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
                        Calories  <Chip label={props.recipe.calories.toFixed(2)} color="primary" />
                    </Typography>
                </CardActions>
                <CardActions>

                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
                {/* {props.recipe} */}
            </Card>
            <br />
        </Container>
    )
}

export default Recipe
