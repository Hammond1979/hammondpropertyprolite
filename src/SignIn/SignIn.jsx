import React, {useState} from 'react'
import Footer from '../Home-page/Footer/Footer';
import NavBar from '../Home-page/NavBar/NavBar';
import './SignIn.css';

const SignIn = () => {
    const[mobile, setMobile] = useState(false)
    return (
        <>
              <NavBar/>
            
            <div class="signInFrm">
                <form action="" className="form">
                    <h2 class="signintitle">Sign in</h2>

                    <div class="inputContainer">
                        <input type="Email" class="input" placeholder="a" />
                        <label for="Email" class="label">Email or Username</label>
                    </div>

                    <div class="inputContainer">
                        <input type="Password" class="input" placeholder="a" />
                        <label for="Password" class="label">Password</label>
                    </div>

                    <div class="inputContainer">
                          <input type="checkbox" id="Remember" name="Remember" value="Remember"/>
                          <label for="" class="Remember"> Remember Me</label>
                          <input type="submit" class="SigninsubmitBtn" value="Sign in" />
                    </div>
                       
                    <div class="inputContainerlast">
                          <label for="" className="Signinmember"><span class="recover">Lost your password?</span><a href="#" className='signRecover'>Click here to recover.</a></label>
                          <label for="" className="Signinmember"><span class="recover">Dont have an account? </span><a href="#" className='signRecover'>Register Now.</a></label>
                    </div>

                    

                </form>
            </div>
            <Footer/>
        </>
    )
}

export default SignIn
