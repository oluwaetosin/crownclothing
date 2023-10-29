import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn =  () => {

    const logGoogleUser = async () => {

        const response = await signInWithGooglePopup();

        await  createUserDocumentFromAuth(response);

        console.log(response);
    }

    return (
        <div>
            <h1>Sign In Page</h1>

            <button onClick={logGoogleUser}>Signin wWith Google Popup</button>
        </div>
    )

}

export default SignIn; 
