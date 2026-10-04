import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Password_Help = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const submitForm = (data) => {
        alert(`Password reset link sent to ${data.email}`);
        reset();
        navigate('/login');
    };

    return (
        <main className="login-page password-help-page-shell container-fluid d-flex align-items-start align-items-md-center justify-content-center py-4 px-3">
            <section className="card login-card password-help-card w-100" aria-labelledby="password-help-title">
                <div className="row g-0">
                <div className="login-intro col-12 col-md-5">
                    <span className="login-kicker">Need help?</span>
                    <h1 id="password-help-title">Reset your password</h1>
                    <p>Enter the email linked to your account and we will send a secure reset link to help you back in.</p>
                    <div className="login-accent" aria-hidden="true">
                        <span>SECURE</span>
                        <span>ACCESS</span>
                    </div>
                    <Link className="login-back-link" to="/login">
                        <span aria-hidden="true">←</span> Back to login
                    </Link>
                </div>

                <form className="login-form password-help-form col-12 col-md-7 d-grid gap-4 p-4 p-lg-5" onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <label className="form-label" htmlFor="reset-email">Email address</label>
                        <input className="form-control" id="reset-email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
                            {...register('email', {
                                required: 'Please enter your email address',
                                pattern: {
                                    value: /^[A-Za-z0-9]+@gmail\.com$/,
                                    message: 'Please enter a valid Gmail address.'
                                }
                            })}
                        />
                        {errors.email && <p className="invalid-feedback d-block">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="form-label" htmlFor="reset-phone">Mobile number</label>
                        <input className="form-control" id="reset-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210"
                            {...register('phone', {
                                required: 'Please enter your mobile number',
                                minLength: {
                                    value: 10,
                                    message: 'Mobile number should be at least 10 digits long.'
                                }
                            })}
                        />
                        {errors.phone && <p className="invalid-feedback d-block">{errors.phone.message}</p>}
                    </div>

                    <button className="btn btn-primary login-submit" type="submit">
                        Send reset link <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </button>

                    <p className="login-signup mb-0">
                        Need a new account? <Link to="/register">Create one</Link>
                    </p>
                </form>
                </div>
            </section>
        </main>
    );
};

export default Password_Help;