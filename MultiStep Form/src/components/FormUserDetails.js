import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';

class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        const { firstName, lastName, email } = this.props.values;
        let errors = this.props.validateValues(firstName, lastName, email);

        if (errors.firstName !== "" || errors.lastName !== "" || errors.email !== "") {
            alert("Please fill in all the fields correctly");
            return;
        }

        this.props.nextStep();
    }



    render() {

        const { firstName, lastName, email } = this.props.values;

        let errors = this.props.validateValues(firstName, lastName, email);


        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        name="firstName"
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={firstName}
                        margin="normal"
                        onBlur={this.props.handleBlur('firstName')}
                        errorText={errors.firstName}
                        errorStyle={{ marginLeft: -20 }}
                    />
                    <br />
                    <TextField
                        name="lastName"
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={lastName}
                        margin="normal"
                        onBlur={this.props.handleBlur('lastName')}
                        errorText={errors.lastName}
                        errorStyle={{ marginLeft: -20 }}
                    />
                    <br />
                    <TextField
                        name="email"
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={this.props.handleChange('email')}
                        defaultValue={email}
                        margin="normal"
                        onBlur={this.props.handleBlur('email')}
                        errorText={errors.email}
                        errorStyle={{ marginLeft: -136 }}
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
