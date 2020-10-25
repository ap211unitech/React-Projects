import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    render() {
        const { occupation, city, bio } = this.props.values;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={this.props.handleChange('occupation')}
                        defaultValue={occupation}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={this.props.handleChange('city')}
                        defaultValue={city}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={this.props.handleChange('bio')}
                        defaultValue={bio}
                        margin="normal"
                    />
                    <br />
                    <Button
                        label="Continue"
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


export default FormPersonalDetails
