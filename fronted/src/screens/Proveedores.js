import React from 'react'
import NavBar from './../components/NavBar';
import TableProv from '../components/TableProv';
import Modalproveliminar from '../components/Modalproveliminar';
import Modalprovactualizar from './../components/Modalprovactualizar';
import { Navigate } from 'react-router-dom';
import Modalprovadd from './../components/Modalprovañadir';
const Proveedores = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <React.Fragment>
        <NavBar/>
        <TableProv/>
        <Modalprovadd/>
        <Modalprovactualizar/>
        <Modalproveliminar/>
        {/* <Button variant="warning" style={{bottom:"10px",position:"absolute",left:"20%",width:"120px"}}>VER</Button> */}
        {/* <Button style={{color:"black",backgroundColor:"red",position:"absolute",bottom:"10px",left:"40%",width:"120px"}}>ACTUALIZAR</Button> */}
        {/* <Button style={{color:"black",backgroundColor:"#95FF0E",position:"absolute",bottom:"10px",left:"60%",width:"120px"}}>AÑADIR</Button> */}
        {/* <Button style={{color:"black",backgroundColor:"#0094FF",position:"absolute",bottom:"10px",left:"80%",width:"120px"}}>ELIMINAR</Button> */}
      </React.Fragment>
    </>
  )
}

export default Proveedores

