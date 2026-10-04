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
        <main className="login-page register-page container-fluid d-flex align-items-start align-items-md-center justify-content-center py-4 px-3">
            <section className="card login-card register-card w-100" aria-labelledby="register-title">
                <div className="row g-0">
                <div className="login-intro col-12 col-md-5">
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

                <form className="login-form register-form col-12 col-md-7 d-grid gap-3 p-4 p-lg-5" onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <label className="form-label" htmlFor="register-name">Full name</label>
                        <input className="form-control" id="register-name" name="name" type="text" autoComplete="name"
                            {...register("name", {
                                required : "Please enter your name"
                            })}
                        />
                        {errors.name && <p className="invalid-feedback d-block">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="form-label" htmlFor="register-email">Email address</label>
                        <input className="form-control" id="register-email" name="email" type="email" autoComplete="email"
                            {...register("email", {
                                required : "Please enter your email address",
                                pattern : {
                                    value : /^[A-Za-z0-9]+@gmail\.com$/,
                                    message : "Please enter a valid email address."
                                }
                            })}
                        />
                        {errors.email && <p className="invalid-feedback d-block">{errors.email.message}</p>}
                    </div>

                    <div className="row g-3">
                        <div className="col-12 col-md-6 position-relative">
                            <label className="form-label" htmlFor="register-password">Password</label>
                            <div className="position-relative">
                                <input className="form-control pe-5" id="register-password" name="password" type={ShowPassword_1 ? "text" : "password"} autoComplete="new-password"
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
                                <button type="button" className="password-toggle btn btn-link" onClick={() => setShowPassword_1(!ShowPassword_1)} aria-label={ShowPassword_1 ? "Hide password" : "Show password"}>
                                    <i className={ShowPassword_1 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} aria-hidden="true" />
                                </button>
                            </div>
                            {errors.password && <p className="invalid-feedback d-block">{errors.password.message}</p>}
                        </div>

                        <div className="col-12 col-md-6 position-relative">
                            <label className="form-label" htmlFor="register-confirm-password">Confirm password</label>
                            <div className="position-relative">
                                <input className="form-control pe-5" id="register-confirm-password" name="confirmPassword" type={ShowPassword_2 ? "text" : "password"} autoComplete="new-password"
                                    {...register("confirmPassword", {
                                        required : "Please confirm your password.",
                                        validate : (value) =>
                                            value === watch("password") || "Passwords do not match."
                                    })}
                                />
                                <button type="button" className="password-toggle btn btn-link" onClick={() => setShowPassword_2(!ShowPassword_2)} aria-label={ShowPassword_2 ? "Hide password" : "Show password"}>
                                    <i className={ShowPassword_2 ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} aria-hidden="true" />
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="invalid-feedback d-block">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="terms" id="register-terms"
                            {...register("checkbox", {
                                required : "Please accept the terms and conditions"
                            })}
                        />
                        <label className="form-check-label" htmlFor="register-terms">I agree to the terms and conditions</label>
                        {errors.checkbox && <p className="invalid-feedback d-block">{errors.checkbox.message}</p>}
                    </div>
                    
                    <button className="btn btn-primary login-submit" type="submit">Create account <i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
                    <p className="login-signup mb-0">Already have an account? <Link to="/login">Login</Link></p>
                </form>
                </div>
            </section>
        </main>
    );
}

export default Register