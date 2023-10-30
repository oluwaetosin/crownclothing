import SignUpForm from '../../components/sign-up-form/sign-up-form';
import LoginForm from "../../components/login-form/login-form.component";

import './authentication.style.scss';

const SignIn =  () => {



    return (
        <div className='authentication-container' >

            <LoginForm />
            
            <SignUpForm />
        </div>
    )

}

export default SignIn; 
