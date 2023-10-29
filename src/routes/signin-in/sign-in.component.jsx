import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn =  () => {

    const logGoogleUser = async () => {

        const {user} = await signInWithGooglePopup();

        await  createUserDocumentFromAuth(user);

        console.log(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>

            <button onClick={logGoogleUser}>Signin wWith Google Popup</button>
            
            <SignUpForm />
        </div>
    )

}

export default SignIn; 
