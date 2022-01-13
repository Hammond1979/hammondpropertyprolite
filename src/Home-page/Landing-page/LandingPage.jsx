import React from 'react'
import About from '../../About/About'
// import About from '../../About/About'
// import Client from '../../Client/Client'
import Clienttext from '../../Client/Clienttext'
import Landed from '../../Landed/Landed'
import Servicehead from '../../Services/Servicehead'
import Services from '../../Services/Services'
import Workflow from '../../WorkFlow/Workflow'
import Workflowtext from '../../WorkFlow/Workflowtext'
import AboutUs from '../About-us/AboutUs'
// import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Property from '../Properties/Property'
import './Landing.css'



const LandingPage = () => {
    return (
        <>
            <NavBar />
            <div className="hero-section-wrapper">

                 <AboutUs />
            </div>
            <Landed />  
            <div className='workflow-background'>
                <Workflow header='Work flow' subHeader='How it works'/>
                <Workflowtext tagNumber='01' workFlowTitle='' />
            </div>
            <div className='client-wrapper'>
                {/* <Client /> */}
                <Workflow header='Testimonial' subHeader='Happy Clients'/>

                <Clienttext />
            </div>
            <div className='service-wrapper'>
            <servicehead serviceSub='Service' subHead='Special Services'/>
            <Services />
            </div>
            <About/>
            <Footer /> 
            {/* <Property/> */}

        </>
    )
}

export default LandingPage
