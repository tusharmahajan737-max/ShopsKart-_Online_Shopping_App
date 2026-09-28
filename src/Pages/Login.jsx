import { useForm } from 'react-hook-form';
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Login = () => {

    const [ShowPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        formState : {errors}
    } = useForm();

    useEffect(() => {
        setFocus("email")
    }, [setFocus])

    const navigate = useNavigate();

    const submitForm = () => {
        alert("Login Successful");
        reset();
        navigate("/");
    }

    return(
        <main className="login-page">
            <section className="login-card" aria-labelledby="login-title">
                <div className="login-intro">
                    <span className="login-kicker">Welcome back</span>
                    <h1 id="login-title">Sign in to ShopsKart</h1>
                    <p>Pick up where you left off and find something you will love.</p>
                    <div className="login-accent" aria-hidden="true">
                        <span>SHOP</span>
                        <span>SMART</span>
                    </div>
                    <Link className="login-back-link" to="/">
                        <span aria-hidden="true">←</span> Back to shop
                    </Link>
                </div>

                <form className="login-form" onSubmit={handleSubmit(submitForm)}>
                    <div className="form-field">
                        <label htmlFor="login-email">Email address</label>
                        <input id="login-email" name="email" type="email" autoComplete="email"
                            {...register("email", {
                                required : "Please enter your email address",
                                pattern : {
                                    value : /^[A-Za-z0-9]+@gmail\.com$/,
                                    message : "Please enter a valid email address."
                                }
                            })}
                        />
                        {errors.email && ( <p>{errors.email.message}</p> )}
                    </div>

                    <div className="form-field">
                        <div className="password-label-row">
                            <label htmlFor="login-password">Password</label>
                            <a href="/password_help">Forgot password?</a>
                        </div>
                        <div className="password-input">
                            <input id="login-password" name="password" type={ShowPassword ? "text" : "password"} autoComplete="current-password"
                                {...register("password", {
                                    required : "Please enter your password",
                                    minLength : {
                                        value : 8,
                                        message : "Password must be at least 8 characters long"
                                    }
                                })}
                            />
                            <button type="button" className="password-toggle" onClick={() => {setShowPassword(!ShowPassword)}} aria-label="Show password">
                                <i className={ShowPassword  ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} aria-hidden="true" />
                            </button>
                            {errors.password && ( <p>{errors.password.message}</p> )}
                        </div>
                    </div>

                    <input type="checkbox" name="checkbox" id="remember-me" 
                        {...register("checkbox", {
                            required: "Please accept the terms and conditions",
                        })}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                    {errors.checkbox && ( <p>{errors.checkbox.message}</p> )}

                    <button className="login-submit" type="submit">Login <span aria-hidden="true">→</span></button>
                    <p className="login-signup">New to ShopsKart? <a href="/register">Create an account</a></p>
                </form>
            </section>
        </main>
    );
}

export default Login