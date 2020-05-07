import React, {useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../homepage/style.css'
import { SignUpWrapper, SmallInput } from './style.js';
import { SignInForm, FormIcon, FormTitle, 
    Input, Checkbox, ButtonInput,
    Copyright } from '../homepage/style.js'

export default () => {
    const savedFirstName = useRef();
    const savedLastName = useRef();
    const savedEmail = useRef();
    const savedPassword = useRef();

    const [firstName, changeFirstName] = useState('');
    const [lastName, changeLastName] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [check, changeCheck] = useState(false);
    

    const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const nameReg = /([іа-яА-ЯA-Za-z]{3,})/;
    const passwordReg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;

    const changeValue = (input, setValue) => {
        setValue(input.current.value);
        isValidForm();
    }

    const isValid = (item, reg) => {
        if(item.current){
            if(item.current.value !== ''){
                return reg.test(item.current.value)
            } else{
                return undefined
            }
        }
    }

   const isValidForm = () => {
       if( 
           isValid(savedFirstName, nameReg) &&
           isValid(savedLastName, nameReg) &&
           isValid(savedEmail, emailReg) &&
           isValid(savedPassword, passwordReg)
       ) {
        return true
       }else{
           return false
       }
   }

   const changeCheckbox = () => {
       changeCheck(!check);
       isValidForm();
   }

   const submitForm = (e) => {
       e.preventDefault();
       isValidForm();
       if(isValidForm()) {
           savedFirstName.current.value = '';
           savedLastName.current.value = '';
           savedEmail.current.value = '';
           savedPassword.current.value = '';
           changeFirstName('');
           changeLastName('');
           changeEmail('');
           changePassword('');
           changeCheck(false);
        }
   } 

    return (
        <SignUpWrapper>
            <SignInForm onSubmit={submitForm}>
              <FormIcon>
                <i className="fas fa-lock" style={{color: 'white', fontSize: '20px'}}></i>
              </FormIcon>
              <FormTitle>Sign up</FormTitle>
              <div style={{display: 'flex', }}>
                <SmallInput 
                placeholder="First Name *" 
                ref={savedFirstName}
                onChange={() => {
                    changeValue(savedFirstName, changeFirstName)
                }}
                value={firstName}
                valid={isValid(savedFirstName, nameReg)}
                />
                <SmallInput 
                placeholder="Last Name *"
                ref={savedLastName}
                value={lastName}
                onChange={() => {
                    changeValue(savedLastName, changeLastName)
                }}
                valid={isValid(savedLastName, nameReg)}
                />
              </div>
              <Input 
              placeholder="Email Address *"
              ref={savedEmail}
              value={email}
              onChange={() => {
                  changeValue(savedEmail, changeEmail)
              }}
              valid={isValid(savedEmail, emailReg)}
              />
                 <Input 
                 type="password"
                 placeholder="Password *"
                 ref={savedPassword}
                 value={password}
                 onChange={() => {
                     changeValue(savedPassword, changePassword)
                 }}
                 valid={isValid(savedPassword, passwordReg)}
                 />
                    <div style={{width: '90%', margin: '0 auto', padding: '0 30px'}}>
                        <label style={{color: 'white', fontFamily: "'Roboto', sans-serif", fontSize: '13px', textAlign: 'center'}}>
                           <Checkbox 
                           type="checkbox" 
                           style={{marginLeft: 0}}
                           onChange={changeCheckbox}
                           checked={check}
                           />
                            I want to receive inspiration, marketing promotions  and updates via email
                        </label>
                    </div>
                    <ButtonInput >Sign Up</ButtonInput>
                    <div className="textWrapper">
                     <div><a className='link' href="#">Already have an accout?</a></div>
                     <div><Link to="/styledcomponent/" className="link">Sign In</Link></div>
                    </div>
                 <Copyright>Copyright. Your website 2020.</Copyright>
            </SignInForm>
        </SignUpWrapper>
    )
}