import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import Button from 'material-ui/RaisedButton';

class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        // PROCESSING FORM //

        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    render() {
        const { firstName, lastName, email, occupation, city, bio } = this.props.values;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Details" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName} />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName} />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email} />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation} />
                        <ListItem
                            primaryText="City"
                            secondaryText={city} />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio} />

                    </List>
                    <Button
                        label="Confirm"
                        primary={true}
                        style={styles.Button}
                        onClick={this.continue}
                    />
                    <Button
                        label="Back"
                        primary={false}
                        style={styles.Button}
                        onClick={this.previous}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    Button: {
        margin: 15
    }
}


export default Confirm
