import React from 'react';
import LandingPage from './Home-page/Landing-page/LandingPage';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Property from './Home-page/Properties/Property';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/LandingPage' element={<LandingPage/>} />
          <Route path='/Signup' element={<SignUp/>} />
          <Route path='/Signin' element={<SignIn />} />
          <Route path='/Property' element={<Property />} />
        </Routes>
      </Router>
      {/* <LandingPage/> 
       <SignUp />
       <SignIn /> */}

    </div>
  );
}

export default App;
