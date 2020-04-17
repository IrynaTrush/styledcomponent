import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { HomeWrapper, Welcome, SignInWrapper,
     WelcomeTitle , SignInForn, FormIcon,
     FormTitle, Input, Checkbox,
     ButtonInput, Copyright} from './style.js'

export default () => {
   const [email, changeEmail] = useState('');
   const handleEmail = (event) => {
    changeEmail(event.target.value);
    console.log(email);
   }
   return(
       <HomeWrapper>
         <Welcome>
             <WelcomeTitle>
                 Welcome
             </WelcomeTitle>
         </Welcome>
         <SignInWrapper>
             <SignInForn>
                 <div>
                  <FormIcon>
                    <i className="fas fa-lock" style={{color: 'white', fontSize: '20px'}}></i>
                  </FormIcon>
                 </div>
                 <FormTitle>Sign in</FormTitle>
                 <Input placeholder="Email Address *" onChange={handleEmail}/>
                 <Input placeholder="Password *"/>
                 <label style={{color: 'white', fontFamily: "'Roboto', sans-serif", fontSize: '13px'}}>
                 <Checkbox type="checkbox"/>
                 Remember me
                 </label>
                 <ButtonInput>Sign in</ButtonInput>
                 <div className="textWrapper">
                     <div><a className='link' href="#">Forgot password?</a></div>
                     <div>
                         <Link to="/styledcomponent/signup" className="link">Sign Up</Link>
                     </div>
                 </div>
                 <Copyright>Copyright. Your website 2020.</Copyright>
             </SignInForn>
         </SignInWrapper>
       </HomeWrapper>
   )
}
