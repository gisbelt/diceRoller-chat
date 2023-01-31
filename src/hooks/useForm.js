import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    // initialForm: which by default will be an object. 
    const [formState, setFormState] = useState( initialForm )

    //change input
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value 
        })
    }

    //reset form
    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState, 
        formState,
        setFormState,
        onInputChange,
        onResetForm,
    }
}