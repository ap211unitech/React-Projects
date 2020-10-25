import React, { Component } from 'react';
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from './Confirm';
import Sucess from './Sucess';

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
            city: '',
            touched: {
                firstName: false,
                lastName: false,
                email: false
            }
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateValues = this.validateValues.bind(this);
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

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }


    validateValues = (firstName, lastName, email) => {
        let errors = {
            firstName: '',
            lastName: '',
            email: '',
        };
        if (this.state.touched.firstName && firstName.length < 3) {
            errors.firstName = 'First Name must be at least 3 charcters long'
        }
        else if (this.state.touched.firstName && firstName.length > 10) {
            errors['firstName'] = 'First Name must be at most 10 charcters long'
        }
        if (this.state.touched.lastName && lastName.length < 3) {
            errors['lastName'] = 'Last Name must be at least 3 charcters long'
        }
        else if (this.state.touched.lastName && lastName.length > 10) {
            errors['lastName'] = 'Last Name must be at most 10 charcters long'
        }

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = 'Email must contain @';
        }
        return errors;
    }




    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        handleBlur={this.handleBlur}
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        values={values}
                        validateValues={this.validateValues} />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} />
                )
            case 4:
                return (
                    <Sucess />
                )
            default:
                return;
        }
    }
}

export default UserForm
