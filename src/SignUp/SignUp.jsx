import React, { useState } from 'react'
import Footer from '../Home-page/Footer/Footer';
import NavBar from '../Home-page/NavBar/NavBar';
import './SignUp.css';

const SignUp = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <>
            <NavBar />


           
            <div class="signupFrm">
                <form action="" class="form">
                    <h1 class="signuptitle">Register</h1>

                    <div class="inputContainer">
                        <input type="text" class="input" placeholder="a" />
                        <label for="" class="label">Name</label>
                    </div>

                    <div class="inputContainer">
                        <input type="text" class="input" placeholder="a" />
                        <label for="" class="label">Username</label>
                    </div>

                    <div class="inputContainer">
                        <input type="Email" class="input" placeholder="a" />
                        <label for="Email" class="label">Email</label>
                    </div>

                    <div class="inputContainer">
                        <input type="Password" class="input" placeholder="a" />
                        <label for="Password" class="label">Password</label>
                    </div>

                    <div class="inputContainer">
                        <input type="Password" class="input" placeholder="a" />
                        <label for="Password" class="label">Confirm Password</label>
                    </div>

                    <div class="inputContainer">
                        <input type="date" class="input" placeholder="a" min="2003-01-01" />
                        <label for="date" class="label">Birthday</label>
                    </div>
                    <div className='Agent-details'>
                    <span className="Agent">Already An Agent? <a href="#" className='signAgent'>Signin</a></span>
                    <input type="submit" class="submitBtn" value="Sign up" />
                    </div>
                </form>
            </div>


            <Footer />


        </>
    )
}

export default SignUp
