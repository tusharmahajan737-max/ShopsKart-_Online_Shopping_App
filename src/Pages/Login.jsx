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
        <main className="login-page container-fluid d-flex align-items-start align-items-md-center justify-content-center py-4 px-3">
            <section className="card login-card w-100" aria-labelledby="login-title">
                <div className="row g-0">
                <div className="login-intro col-12 col-md-5">
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

                <form className="login-form col-12 col-md-7 d-grid gap-4 p-4 p-lg-5" onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <label className="form-label" htmlFor="login-email">Email address</label>
                        <input className="form-control" id="login-email" name="email" type="email" autoComplete="email"
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

                    <div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
                            <label className="form-label mb-0" htmlFor="login-password">Password</label>
                            <Link className="login-inline-link" to="/password_help">Forgot password?</Link>
                        </div>
                        <div className="position-relative">
                            <input className="form-control pe-5" id="login-password" name="password" type={ShowPassword ? "text" : "password"} autoComplete="current-password"
                                {...register("password", {
                                    required : "Please enter your password",
                                    minLength : {
                                        value : 8,
                                        message : "Password must be at least 8 characters long"
                                    }
                                })}
                            />
                            <button type="button" className="password-toggle btn btn-link" onClick={() => {setShowPassword(!ShowPassword)}} aria-label={ShowPassword ? "Hide password" : "Show password"}>
                                <i className={ShowPassword  ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} aria-hidden="true" />
                            </button>
                        </div>
                        {errors.password && <p className="invalid-feedback d-block">{errors.password.message}</p>}
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="remember-me"
                            {...register("checkbox", { required: "Please accept the terms and conditions" })}
                        />
                        <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                        {errors.checkbox && <p className="invalid-feedback d-block">{errors.checkbox.message}</p>}
                    </div>

                    <button className="btn btn-primary login-submit" type="submit">Login <i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
                    <p className="login-signup mb-0">New to ShopsKart? <Link to="/register">Create an account</Link></p>
                </form>
                </div>
            </section>
        </main>
    );
}

export default Login