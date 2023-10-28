import React from 'react';
import styled, { css } from 'styled-components'; 
import loginImg from './assets/loginimg.png';

const Container = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;

const MainContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 0px;
  height: 633.6px;
  flex-direction: column; /* Default to flex column */
  align-items: center;
`;

const LeftSide = styled.div`
  display: none;
`;

const RightSide = styled.div`
  width: 100%;
  height: 633.6px;
  display: flex;
  box-shadow: 0px 10px 40px 0px #00000029;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

const Form = styled.form`
  width: 90%;
  height: 555px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Input = styled.input`
  height: 56px;
  border-radius: 8px;
  padding: 0px 12px;
  border: 1px solid #04072F66;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: auto;
  margin-right: 10px;
`;
const Colored = styled.span`
    color : #F78719;
    margin: 0px 5px;
`;

const Button = styled.button`
  width: 70%;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px;
  background-color: #1575A7;
  margin: 40px auto 40px auto;
`;

const Link = styled.a`
  text-align: center;
  text-decoration: none;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;



const MediaQuery = {
  desktop: `(min-width: 1000px)`, // Define your breakpoint for desktop screens
};

const DesktopStyles = css`
  ${Container} {
    display: flex;
  }
  ${RightSide} {
    width: 70%;
  }
  ${LeftSide} {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${Form} {
    width: 824px;
  }
  ${Button} {
    width: 538px;
  }
  ${InputGroup} {
    width: 100%;
  }
`;

const ResponsiveMainContainer = styled(MainContainer)`
  @media ${MediaQuery.desktop} {
    display: flex;
    flex-direction: row; /* Change to flex row for desktop screens */
    justify-content: space-between;
    padding: 10px 50px 10px 50px;
    ${DesktopStyles}
  }
`;



const Login = () => {
  return (
    <div>
      <Container className='mainContainer'>
        <ResponsiveMainContainer>
          <LeftSide className='imgContainer'>
            <img className='LoginImg' src={loginImg} alt="" />
          </LeftSide>
          <RightSide className='RightSide'>
            <Form>
              <Title>Login</Title>
              <InputGroup className='inputs'>
                <label htmlFor="loginId">Login ID</label> <br />
                <Input id='loginId' type="text" placeholder="Enter Login ID" />
              </InputGroup>
              <InputGroup className='inputs'>
                <label htmlFor="password">Password</label> <br />
                <Input id='password' type="password" placeholder="Enter Password" />
              </InputGroup>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> Remember me
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" /> Agree to <Colored> terms & conditions</Colored> 
              </CheckboxLabel>
              <Button type="submit">Login</Button>
              <Link href="#">Don't have an account? <Colored>Register Here</Colored> </Link>
            </Form>
          </RightSide>
        </ResponsiveMainContainer>
      </Container>
    </div>
  );
};

export default Login;
