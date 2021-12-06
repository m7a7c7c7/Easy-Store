import React from 'react'
import NavBar from '../components/NavBar'
import TableProd from '../components/TableProd';
import { Navigate } from "react-router-dom";
import Modalprodedt from './../components/Modalprodedt';
import Modalprodact from '../components/Modalprodact';
import Modalprodacañd from '../components/Modalprodañd';
import {Container,Button} from 'react-bootstrap';
const Productos = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <React.Fragment>
        <NavBar />
        <TableProd/>
        <Modalprodedt/>
        <Modalprodact/>
        <Modalprodacañd/>
        <Button style={{color:"black",backgroundColor:"#0094FF",position:"absolute",bottom:"10px",left:"80%",width:"120px"}}>ELIMINAR</Button>
      </React.Fragment>
    </>
  )
}

export default Productos
