import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email:'',
                password:''
            })
        }catch(e){console.log(e)}

     
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButtom type="submit" >Sign in</CustomButtom>

                        <CustomButtom
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn={true}
                       
                            >Sign in with Google</CustomButtom>
                    </div>
                </form>

            </div>
        )
    }
}
export default SignIn;