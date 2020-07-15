import React from 'react'

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {auth , createUserProfileDocument} from '../../firebase/firebase.utils'
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword:'',
            displayName:''
        }
    }
     
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password!==confirmPassword){
            alert('uh oh')
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
              );
        
              await createUserProfileDocument(user, { displayName });
        
              this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });

        }catch(error){
            console.log(error)
        }

    };
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
   
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={displayName}
                        label='Full Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={password}
                        label='password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type = 'submit'>Create Account</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;