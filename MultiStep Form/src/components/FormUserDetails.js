import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';

class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    render() {
        const { firstName, lastName, email } = this.props.values;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={firstName}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={lastName}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={this.props.handleChange('email')}
                        defaultValue={email}
                        margin="normal"
                    />
                    <br />
                    <Button
                        label="Continue"
                        primary={true}
                        style={styles.Button}
                        onClick={this.continue}
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

export default FormUserDetails
