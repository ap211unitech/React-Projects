import React, { Component } from 'react';
import FormUserDetails from "./FormUserDetails";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            bio: '',
            city: ''
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails handleChange={this.handleChange} nextStep={this.nextStep} values={values} />
                )
            case 2:
                return <h1>Form User Details</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Sucess</h1>
            default:
                return;
        }
    }
}

export default UserForm
