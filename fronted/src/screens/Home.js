import React from 'react'
import NavBar from '../components/NavBar'
import { Navigate } from "react-router-dom";
const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <React.Fragment>
        <NavBar/>
        <h1 style={{color:"red",textAlign:"center",padding:"200px"}}>Bienvenido a EASY STORE</h1>
      </React.Fragment>
    </>
  )
}

export default Home
