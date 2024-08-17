import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from "../../hooks/useAuth.js";
import { useForm } from "../../hooks/useForm.js";

const initialValues = { email: '', password: '' };

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate()

    const loginHandler = async ({ email, password }) => {
        if (!email) {
            return setError('Email is required');
        }
        if (!password) {
            return setError('Password is required');
        }
        try {
            await login(email, password)
            navigate('/');

        } catch (err) {
            setError(err.message);


        }

    }

    const {
        values,
        changeHnadler,
        submitHandler
    } = useForm(initialValues, loginHandler)

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={submitHandler}>
                    <input type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={changeHnadler}
                        placeholder="email"
                    />
                    <input type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={changeHnadler}
                        placeholder="password"
                    />

                    {error && (
                        <p>
                            <span style={{ fontSize: '18px', color: 'red', textAlign: "center" }}>{error}</span>
                        </p>
                    )}
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
    )
}