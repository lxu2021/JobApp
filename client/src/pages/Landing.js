
import React from 'react'
import main from '../assets/images/main.svg'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
            {/* info*/}
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>
                    Quality daycare service is a major concern for many families, 
                    especially those with children under the age of 5, 
                    according to the Bureau of Labor Statistics. 
                    Both the BLS and the National Bureau of Economic Research 
                    indicate a correlation between quality daycare for young children 
                    and success in later work life. Starting a daycare is no easy task, 
                    and neither is marketing it to the rest of neighborhood to 
                    get off to a quick start. However, with a little careful planning 
                    you can introduce your daycare to the neighborhood in a way that 
                    generates interest and business.
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>

        </div> 
    </Wrapper>
    
  )
    
  
}

export default Landing