import React from "react";
import img1 from "../assets/img/Logo-EasyStore.png";
import img2 from "../assets/img/imagen de tienda.png";
import ButtonLogin from "../components/ButtonLogin";
import { Container } from 'react-bootstrap';


const Login = () => {
  return (
    <>
      <div>
        <img src={img1} alt="Logo de Easy Store" style={{left:"80px",width:"340px",position:"absolute"}} />
        <img src={img2} alt="imagen animada de tienda" style={{left:"100px",width:"300px",position:"absolute",top:"400px"}}/>
        <img src={img1} alt="Logo de Easy Store difuminado" style={{left:"600px",width:"600px",position:"absolute",opacity:"0.4"}} />
        <h1 style={{left:"700px",position:"absolute",top:"210px",fontFamily:"monserrat",fontSize:"50px"}}>WELCOME BACK!</h1>
      </div>
      <Container style={{position:"absolute",top:"50%",left:"25%"}}>
        <ButtonLogin/> 
      </Container>
        
    </>
  )
}

export default Login
