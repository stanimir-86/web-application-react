import { useNavigate } from 'react-router-dom';

import { useLogin } from "../../hooks/useAuth.js";
import { useForm } from "../../hooks/useForm.js";

export default function Login() {

    const login = useLogin();

    const navigate = useNavigate()

    const { values, changeHnadler, submitHandler } = useForm(
        { email: '', password: '' },
        async ({ email, password }) => {
            try {
                await login(email, password)
                navigate('/');

            } catch (err) {
                console.log(err.message);

            }
        });


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
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
    )
}