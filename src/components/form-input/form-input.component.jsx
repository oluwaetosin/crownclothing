import { useState } from "react";

import './form-input.styles.scss';


const FormInput = ({label, ...otherProps }) => {

    const [displayName, setDisplayName] = useState();

    const changeHandler = (event)=>{
        const [value] = event.target;

        setDisplayName({displayName: value});
    }


    return (
        <div className="group">
            <input
            className="form-input"
            {...otherProps}
            />
           {
            label && 
           (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
           )
           }

            
        </div>
    )
}

export default FormInput;