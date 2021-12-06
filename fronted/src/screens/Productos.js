import React from 'react'
import NavBar from '../components/NavBar'
import TableProd from '../components/TableProd';
import { Navigate } from "react-router-dom";
import Modalprodadd from '../components/Modalprodañadir';
import Modalprodeliminar from '../components/Modalprodeliminar';
import Modalprodactualizar from './../components/Modalprodactualizar';
import Modalprodedt from './../components/Modalprodedt';
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
        <Modalprodadd/>
        <Modalprodeliminar/>
        <Modalprodactualizar/>
        {/* <Button style={{color:"black",backgroundColor:"#0094FF",position:"absolute",bottom:"10px",left:"80%",width:"120px"}}>ELIMINAR</Button> */}
      </React.Fragment>
    </>
  )
}

export default Productos
