import React from 'react';
import './LoginForm.css';
import { IoEyeOffSharp} from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle} from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import Logo from "../img/Logo.png";
import { Link } from 'react-router-dom';

const LoginForm = () => {

    return (
        <div className='wrapper'>
            <form action=''>
                <div className='image-space'><img src={ Logo} alt="Description of the image" className='image-style' />
Digizen</div>
                <IoIosClose className='close-icon'/>
                <h2>Log in</h2>
                <div className='register-link'>
                    <p>Don't have an account? <Link to='/SignUp'>Sign up</Link></p>
                </div>
               
                <button className='fab' type='submit'> <FaFacebook className='face-book' />Log in with Facebook</button>
                <button className='fog' type='submit'> <FcGoogle className='goo-gle'/>Log in with Google</button>

                <div className='or-line'>
                    <hr className='w-full'/>
                    <p className='or-text'>or</p>
                </div>
                <div className='input-box'> 
                <label for="email">Your email</label>
                    <input type='text'  placeholder='' id='text' name='text' required />
                </div>
                <div className='input-box'>
                <label for="password">Your password</label>
                    <input type='password'  placeholder='' required />
                    <IoEyeOffSharp className='icon'/>
                </div>

                <div className="remember-forgot">
                <label><input type='checkbox'/>Remember me </label>
                {/* Link to the forgot password page  */}
                <a href='#'>Forgot your password?</a>
                </div>

                <button className='submit' type='submit'>Log In</button>

            </form>
        </div>
    );
};


export default LoginForm;