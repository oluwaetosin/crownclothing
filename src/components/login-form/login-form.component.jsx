import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./login-form.style.scss";
import { createUserDocumentFromAuth, signInWithGooglePopup, signinWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultUser = {
    email: "",
    password: ""
}

const logGoogleUser = async () => {

    const {user} = await signInWithGooglePopup();

    await  createUserDocumentFromAuth(user);

    console.log(user);
}

const LoginForm = ()=>{

    const [loginUser, setLoginUser] = useState(defaultUser);

    const resetForm = () => {

        setLoginUser(defaultUser);
    }

    const {email, password} = loginUser;

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const result = await signinWithEmailAndPassword(email, password);

            resetForm();

            console.log(result);

        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-login-credentials':
                    alert('incorrect password form email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
            
                default:
                    console.log(error);
            }
        }

    }

    const handleValueChange = (event)=>{

        const {name, value}  =  event.target;

        setLoginUser({...loginUser, [name]: value});


    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput lable="Email" type="email" required value={email} name="email" onChange={handleValueChange}></FormInput>

                <FormInput lable="Password" type="password" required value={password} onChange={handleValueChange} name="password"></FormInput>

                <div className="buttons-container">
                    <Button type="submit" >Login</Button>
                    <Button buttonType='google' onClick={logGoogleUser} type="button">Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;