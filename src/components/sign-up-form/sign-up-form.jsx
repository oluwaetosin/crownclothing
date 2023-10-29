import { useState } from "react";

import {createAuthUserWitEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import   './sign-up-styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}



const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} =  formFields

    const handleChange = (event) => {
        const  {name, value} =  event.target;

    

    setFormFields({...formFields, [name]: value});

    

    }

    const reset = () => {
        setFormFields(defaultFormFields);

    }

    const submit = async (event) => {

        event.preventDefault();

        if (password !== confirmPassword){
            return;
        }

        try {
            const {user} =   await createAuthUserWitEmailAndPassword(email, password);

            console.log(user);

          

            const newUser =  createUserDocumentFromAuth(user, {displayName});

            reset();
 
      
        } catch (error) {
            console.log(error);
        }
        
     
     
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
                <form  onSubmit={submit}>

                   
                 
                    <FormInput 
                        label="Display Name"
                        type="text" 
                        required 
                        name="displayName" 
                        onChange={handleChange} 
                        value={displayName} />

                    
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="Email"
                        onChange={handleChange} 
                        value={email} 
                        required />

                     
                    <FormInput 
                        label="Password"
                        type="password" 
                        onChange={handleChange}  
                        value={password} 
                        name="password" 
                        required
                        />

                   
                    <FormInput 
                        type="password" 
                        required 
                        label="Confirm Password"
                        onChange={handleChange}  
                        value={confirmPassword}  
                        name="confirmPassword"
                         />

                    <Button   type="submit">Sign Up</Button>

                </form>
            
        </div>
    )
}

export default SignUpForm;