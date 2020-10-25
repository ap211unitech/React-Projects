import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Sucess extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Submission successful" />
                    <h1>Thank you For your Submission</h1>
                    <p>You wil get an email with further instructions.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Sucess
