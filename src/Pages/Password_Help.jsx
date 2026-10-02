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
        <main className="login-page password-help-page-shell">
            <section className="login-card password-help-card" aria-labelledby="password-help-title">
                <div className="login-intro">
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

                <form className="login-form password-help-form" onSubmit={handleSubmit(submitForm)}>
                    <div className="form-field">
                        <label htmlFor="reset-email">Email address</label>
                        <input
                            id="reset-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            {...register('email', {
                                required: 'Please enter your email address',
                                pattern: {
                                    value: /^[A-Za-z0-9]+@gmail\.com$/,
                                    message: 'Please enter a valid Gmail address.'
                                }
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="reset-phone">Mobile number</label>
                        <input
                            id="reset-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+91 98765 43210"
                            {...register('phone', {
                                required: 'Please enter your mobile number',
                                minLength: {
                                    value: 10,
                                    message: 'Mobile number should be at least 10 digits long.'
                                }
                            })}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>

                    <button className="login-submit" type="submit">
                        Send reset link <span aria-hidden="true">→</span>
                    </button>

                    <p className="login-signup">
                        Need a new account? <Link to="/register">Create one</Link>
                    </p>
                </form>
            </section>
        </main>
    );
};

export default Password_Help;