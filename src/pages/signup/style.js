import styled from "styled-components";

export const SignUpWrapper = styled.div`
  width: 30%;
  margin: 0 auto;
  height: 520px;
  background-color: #004080;
  border-radius: 30px;
  padding-top: 60px;
  box-shadow: 5px 5px 10px  #001a33;
`;

export const SmallInput = styled.input`
  width: 30%;
  
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