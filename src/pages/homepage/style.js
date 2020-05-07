import styled from "styled-components";

export const HomeWrapper = styled.div`
   width: 70%;
   height: 600px;
   margin: 0 auto;
   background-color: #004080;
   display: flex;
   border-radius: 35px;
   box-shadow: 5px 5px 10px  #001a33;
`;

export const Welcome = styled.div`
   width: 60%;
   background-color: red;
   border-bottom-left-radius: 35px;
   border-top-left-radius: 35px;
   background: url('https://cdn.pixabay.com/photo/2018/08/17/21/11/night-3613835_1280.jpg') no-repeat;
   background-size: cover;
   padding-left: 50px;
`;

export const SignInWrapper = styled.div`
   width: 40%;
   padding: 90px 0;
`;

export const WelcomeTitle = styled.h1`
   font-size: 100px;
   color: #000d1a;
   text-shadow: 5px 5px 5px;
`;

export const SignInForm = styled.form`
   width: 80%;
   margin: 0 auto;
   
   
`;

export const FormIcon = styled.div`
  width: 10%;
  margin: 0 auto;
  background-color: pink;
  display: flex;
  justify-content: center;
  padding: 10px 5px;
  border-radius: 50%;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
`;

export const FormTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 5px;
`;

export const Input = styled.input`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding: 10px;
  background: transparent;
  border: 1px solid silver;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  margin-bottom: 15px;
  ${props => 
    props.valid === undefined ? "border-color: #888; color: #888;" :
    props.valid ? 
      "border-color: #00b300; color: #00b300;" :
      "border-color: #b32400; color: #b32400;"
  }
`;

export const Checkbox = styled.input`
 margin-left: 30px;
`;

export const ButtonInput = styled.button`
 font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #00091a;
  background-color: #ccddff;
  border: none;
  border-radius: 5px;
  display: flex;
  margin: 0 auto;
  width: 85%;
  padding: 10px;
  text-align: center;
  margin-top: 15px;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  ${props => props.isDisabled ? "cursor: not-allowed;" : "cursor: pointer;"}
  &:hover {
   background-color: #b3ccff;
   transform: scale(1.02);
   transition: all 0.3s;
   
  }
  
`;

export const Copyright = styled.p`
  width: 60%;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color:#00091a ;
  margin-top: 30px;
  text-align: center;
`;

export const Error = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin: -15px 0 10px 30px;
  font-size: 12px;
  color: #4d0000;
`;