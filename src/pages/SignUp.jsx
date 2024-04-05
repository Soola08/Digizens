import React from 'react';
import './SignUp.css';
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
                <h2>Sign Up</h2>
                <div className='register-link'>
                    <p>Have an account already? <Link to ="/LoginForm">Log In</Link></p>
                </div>
               
                <button className='fab' type='submit'> <FaFacebook className='face-book' />Sign up with Facebook</button>
                <button className='fog' type='submit'> <FcGoogle className='goo-gle'/>Sign up with Google</button>

                <div className='or-line'>
                    <hr className='w-full'/>
                    <p className='or-text'>or</p>
                </div>
                <div className='input-box'> 
                <label for="name">First name</label>
                    <input type='name'  placeholder=''required />
                </div>
                <div className='input-box'>
                <label for="text">Last name</label>
                    <input type='text'  placeholder='' required />
                </div>

                <div className='input-box'>
                <label for="email">Email address</label>
                    <input type='email'  placeholder='' required id='email'/>
                </div>


                <button className='submit' type='submit'>Sign Up</button>

            </form>
        </div>
    );
};


export default LoginForm;