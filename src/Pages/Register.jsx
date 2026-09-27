import { Link, useNavigate } from "react-router-dom";
import '../Styles/Login.css'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {

    const [ShowPassword_1, setShowPassword_1] = useState(false);
    const [ShowPassword_2, setShowPassword_2] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setFocus,
        formState : {errors}
    } = useForm();

    useEffect(() => {
        setFocus("name")
    },[setFocus])

    const navigate = useNavigate();

    const submitForm = () => {
        alert("Registation successfull");
        reset();
        navigate('/');
    }

    return(
        <main className="login-page register-page">
            <section className="login-card register-card" aria-labelledby="register-title">
                <div className="login-intro">
                    <span className="login-kicker">Join ShopsKart</span>
                    <h1 id="register-title">Create your account</h1>
                    <p>Save your favourites, follow your orders, and enjoy a smoother way to shop.</p>
                    <div className="login-accent" aria-hidden="true">
                        <span>DISCOVER</span>
                        <span>MORE</span>
                    </div>
                    <Link className="login-back-link" to="/">
                        <span aria-hidden="true">←</span> Back to shop
                    </Link>
                </div>

                <form className="login-form register-form" onSubmit={handleSubmit(submitForm)}>
                    <div className="form-field">
                        <label htmlFor="register-name">Full name</label>
                        <input id="register-name" name="name" type="text" autoComplete="name" 
                            {...register("name", {
                                required : "Please enter your name"
                            })}
                        />
                        {errors.name && ( <p>{errors.name.message}</p> )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="register-email">Email address</label>
                        <input id="register-email" name="email" type="email" autoComplete="email" 
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

                    <div className="register-password-grid">
                        <div className="form-field register-password-field">
                            <label htmlFor="register-password">Password</label>
                            <input id="register-password" name="password" type={ShowPassword_1 ? "text" : "password"} autoComplete="new-password" 
                                {...register("password", {
                                    required : "Please enter your password",
                                    minLength : {
                                        value : 8,
                                        message : "Password must be at least 8 characters long"
                                    },
                                    pattern : {
                                        value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                                        message : "Password must contain uppercase, lowercase, number and special character."
                                    }
                                })}
                            />
                            <button type="button" className="register-password-toggle" onClick={() => setShowPassword_1(!ShowPassword_1)} aria-label={ShowPassword_1 ? "Hide password" : "Show password"}>
                                <i className={ShowPassword_1 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} aria-hidden="true" />
                            </button>
                            {errors.password && ( <p>{errors.password.message}</p> )}
                        </div>

                        <div className="form-field register-password-field">
                            <label htmlFor="register-confirm-password">Confirm password</label>
                            <input id="register-confirm-password" name="confirmPassword" type={ShowPassword_2 ? "text" : "password"} autoComplete="new-password" 
                                {...register("confirmPassword", {
                                    required : "Please confirm your password.",
                                    validate : (value) =>
                                        value === watch("password") || "Passwords do not match."
                                })}
                            />
                            <button type="button" className="register-password-toggle" onClick={() => setShowPassword_2(!ShowPassword_2)} aria-label={ShowPassword_2 ? "Hide password" : "Show password"}>
                                <i className={ShowPassword_2 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} aria-hidden="true" />
                            </button>
                            {errors.confirmPassword && ( <p>{errors.confirmPassword.message}</p> )}
                        </div>
                    </div>

                    <label className="register-terms" htmlFor="register-terms">
                        <input type="checkbox" name="terms" id="register-terms" 
                            {...register("checkbox", {
                                required : "Please accept the terms and conditions"
                            })}
                        />
                        <span>I agree to the terms and conditions</span>
                        {errors.checkbox && ( <p>{errors.checkbox.message}</p> )}
                    </label>
                    
                    <button className="login-submit" type="submit">Create account <span aria-hidden="true">→</span></button>
                    <p className="login-signup">Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </section>
        </main>
    );
}

export default Register