import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ()=>(
    <div className='.sign-in-and-sign-up' style= {{width: '850px', display: 'flex', justifyContent:'space-between', margin: '30px auto'}}>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;