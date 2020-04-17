import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../homepage/style.css'
import { SignUpWrapper, SmallInput } from './style.js';
import { SignInForn, FormIcon, FormTitle, 
    Input, Checkbox, ButtonInput,
    Copyright } from '../homepage/style.js'

export default () => {
    const [firstName, typeFirstName] = useState('');
    const handleFirstName = (event) => {
        typeFirstName(event.target.value);
        console.log(firstName)
    }
    return (
        <SignUpWrapper>
            <SignInForn>
              <FormIcon>
                <i className="fas fa-lock" style={{color: 'white', fontSize: '20px'}}></i>
              </FormIcon>
              <FormTitle>Sign up</FormTitle>
              <div style={{display: 'flex', }}>
                <SmallInput placeholder="First Name *" onChange={handleFirstName}/>
                <SmallInput placeholder="Last Name *"/>
              </div>
              <Input placeholder="Email Address *"/>
                 <Input placeholder="Password *"/>
                    <div style={{width: '90%', margin: '0 auto', padding: '0 30px'}}>
                        <label style={{color: 'white', fontFamily: "'Roboto', sans-serif", fontSize: '13px', textAlign: 'center'}}>
                           <Checkbox type="checkbox" style={{marginLeft: 0}}/>
                            I want to receive inspiration, marketing promotions  and updates via email
                        </label>
                    </div>
                    <ButtonInput>Sign Up</ButtonInput>
                    <div className="textWrapper">
                     <div><a className='link' href="#">Already have an accout?</a></div>
                     <div><Link to="/styledcomponent/" className="link">Sign In</Link></div>
                    </div>
                 <Copyright>Copyright. Your website 2020.</Copyright>
            </SignInForn>
        </SignUpWrapper>
    )
}