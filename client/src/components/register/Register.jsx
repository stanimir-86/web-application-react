import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth.js"
import { useForm } from "../../hooks/useForm.js";
import { useState } from "react";

const initialValues = { email: '', password: '', repass: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {

        if (values.password !== values.repass) {
            return setError('Password missmatch!');
        }

        try {
            await register(values.email, values.password, values.repass)
            navigate('/');

        } catch (err) {
            setError(err.message);

        }
    };

    const {
        values,
        changeHnadler,
        submitHandler
    } = useForm(initialValues, registerHandler);
    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="register-form" onSubmit={submitHandler}>
                    <input type="email"
                        value={values.email}
                        onChange={changeHnadler}
                        name="email"
                        id="register-email"
                        placeholder="email" />
                    <input type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHnadler}
                        placeholder="password" />
                    <input type="password"
                        name="repass"
                        value={values.repass}
                        onChange={changeHnadler}
                        id="repeat-password"
                        placeholder="repass" />

                    {error && (
                        <p>
                            <span style={{ fontSize: '18px', color: 'red', textAlign: "center" }}>{error}</span>
                        </p>
                    )}

                    <button type="submit">register</button>
                    <p className="message">
                        Already registered? <a href="#">Login</a>
                    </p>
                </form>
            </div>
        </section>
    )
}