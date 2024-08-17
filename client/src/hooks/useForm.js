import { useEffect, useState } from 'react';

export function useForm(initialValues, submitCallback, options = { reinitializaForm: false }) {

    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        if (options.reinitializaForm) {
            setValues(initialValues);
        }

    }, [initialValues, options]);

    const reinitializaForm = () => {
        setValues(initialValues);
    }

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
        reinitializaForm,
    };
};