import { useEffect, useState } from 'react';

export function useForm(initialValues, submitCallback, reinitializaForm = false) {

    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if (reinitializaForm) {
            setValues(initialValues);
        }

    }, [initialValues, reinitializaForm]);

    const changeHnadler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await submitCallback(values);
        setValues(initialValues);
    }
    return {
        values,
        changeHnadler,
        submitHandler,
        
    };
};