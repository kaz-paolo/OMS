import react from 'react';
import './styles.css';
import facebook from './facebook.svg';
import google from './google.svg';

export default function Login() {
    return(
    <div className="container">
        <div className="form-wrapper">
            <h1>Log In</h1>
  
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
    
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required/>
                </div>

                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit" className="confirm-button">Log In</button>

                <div className="checkbox-container">
                    <input type="checkbox" id="rememberMe"/>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
    
                <p className="sign-in-text">Or Sign in With</p>
    
                <div className="social-icons">
                    <a href="#" className="social-icon">
                        <img src={google} alt="Google" />
                    </a>
                    <a href="#" className="social-icon">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </div>
        
                <p className="signup-text">
                Don't have an account? <a href="signup.html" className="signup-link">Sign up here</a>
                </p>
            </form>
        </div>
    </div>
    );
}