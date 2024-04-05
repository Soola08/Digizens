import React from 'react';
import './LoginForm.css';
import { IoEyeOffSharp} from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle} from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import Logo from "../../img/Logo.png";

const LoginForm = () => {

    return (
        <div className='wrapper'>
            <form action=''>
                <h1><img src={ Logo} alt="Description of the image" className='image-style' />
Digizen</h1>
                <IoIosClose className='close-icon'/>
                <h2>Log in</h2>
                <div className='register-link'>
                    <p>Don't have an account? <a href='#'>Sign up</a></p>
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
                <a href='#'>Forgot your password?</a>
                </div>

                <button className='submit' type='submit'>Log In</button>

            </form>
        </div>
    );
};


export default LoginForm;