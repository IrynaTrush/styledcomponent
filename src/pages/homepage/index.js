import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { HomeWrapper, Welcome, SignInWrapper,
     WelcomeTitle , SignInForm, FormIcon,
     FormTitle, Input, Checkbox,
     ButtonInput, Copyright } from './style.js'

export default () => {
    const savedEmail = useRef();
    const savedPassword = useRef();
    const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const passwordReg  = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;

   const [email, changeEmail] = useState('');
   const [password, changePassword] = useState('');
   const [check, changeCheck] = useState(false);
   
   const changeValue = (input, setValue) => {
    setValue(input.current.value)
    isValidForm()
  }

  const isValid = (el, reg) => {
    if (el.current) {
      if (el.current.value !== '') {
        return reg.test(el.current.value)
      } else {
        return undefined
      }
    }
  }

  const isValidForm = () => {
    if (
      isValid(savedEmail, emailReg) &&
      isValid(savedPassword, passwordReg)
    ) {
       return true
    } else {
       return false
    }
  }

  const changeCheckbox = () => {
    changeCheck(!check)
    isValidForm()
  }

  const submitForm = (e) => {
    e.preventDefault();
    isValidForm()

    if (isValidForm()) {
      savedEmail.current.value = '';
      savedPassword.current.value = '';
      changeEmail('');
      changePassword('');
      changeCheck(false);
    }
}
   return(
       <HomeWrapper>
         <Welcome>
             <WelcomeTitle>
                 Welcome
             </WelcomeTitle>
         </Welcome>
         <SignInWrapper>
             <SignInForm onSubmit={submitForm}>
                 <div>
                  <FormIcon>
                    <i className="fas fa-lock" style={{color: 'white', fontSize: '20px'}}></i>
                  </FormIcon>
                 </div>
                 <FormTitle>Sign in</FormTitle>
                 <Input 
                 placeholder="Email Address *" 
                 value={email} 
                 ref={savedEmail}
                 onChange={() => {
                    changeValue(savedEmail, changeEmail)
                  }}
                  valid={isValid(savedEmail, emailReg)}
                 />
                 <Input 
                 type="password"
                 placeholder="Password *" 
                 value={password} 
                 ref={savedPassword}
                 onChange={() => {
                     changeValue(savedPassword, changePassword)
                 }}
                 valid={isValid(savedPassword, passwordReg)}
                 />
                 <label style={{color: 'white', fontFamily: "'Roboto', sans-serif", fontSize: '13px'}}>
                 <Checkbox 
                 type="checkbox" 
                 checked={check} onChange={() => changeCheckbox()}/>
                 Remember me
                 </label>
                 <ButtonInput type='submit'>Sign in</ButtonInput>
                 <div className="textWrapper">
                     <div><a className='link' href="#">Forgot password?</a></div>
                     <div>
                         <Link to="/styledcomponent/signup" className="link">Sign Up</Link>
                     </div>
                 </div>
                 <Copyright>Copyright. Your website 2020.</Copyright>
             </SignInForm>
         </SignInWrapper>
       </HomeWrapper>
   )
}
