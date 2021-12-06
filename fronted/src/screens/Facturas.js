import React from 'react'
import NavBar from '../components/NavBar'
import { Navigate } from "react-router-dom";
import TableFact from './../components/TableFact';
import Modalfacver from './../components/Modalfactver';
import Modalfacedt from '../components/Modalfacedt';
import Modalfacañd from "../components/Modalfacañd";
import {Container,Button} from 'react-bootstrap';
const Facturas = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <React.Fragment>
        <NavBar/>
        <TableFact/>
        <Modalfacver/>
        <Modalfacedt/>
        <Modalfacañd/>
        <Button style={{color:"black",backgroundColor:"#0094FF",position:"absolute",bottom:"10px",left:"80%",width:"120px"}}>ELIMINAR</Button>
      </React.Fragment>
    </>
  )
}

export default Facturas

