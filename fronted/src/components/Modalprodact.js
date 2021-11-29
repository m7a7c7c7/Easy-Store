import React from 'react';
import { Button,Table } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Modalprodact extends React.Component {
    state = {
        abierto: false,
    }

    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto });
    }

    render() {

        const modalStyles = {
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        return (
            <>
                <div className="principal">
                    <div className="secundario">
                        {/* <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button> */}
                        <Button onClick={this.abrirModal} style={{color:"black",backgroundColor:"red",position:"absolute",bottom:"10px",left:"40%",width:"120px"}}>ACTUALIZAR</Button>
                    </div></div>

                <Modal isOpen={this.state.abierto} style={modalStyles, { maxWidth: "40%",maxHeight:"100%",overflowY:"scroll"}}>
                    <ModalHeader>
                        Producto
                    </ModalHeader>
                    <ModalBody>
                        <div style={{alignContent:"center"}}>
                        <FormGroup >
                            <Label for="usuario">NOMBRE: &nbsp; </Label>
                            <input style={{left:"50%",position:"relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">MARCA: &nbsp; </Label>
                            <input style={{ left: "45%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">ESPECIFICACIONES: &nbsp; </Label>
                            <input style={{ left: "35%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">CANTIDAD: &nbsp; </Label>
                            <input style={{ left: "45%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">PRECIO DE COMPRA: &nbsp; </Label>
                            <input style={{ left: "35%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">PRECIO DE VENTA: &nbsp; </Label>
                            <input style={{ left: "35%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button style={{position: "relative", left: "-40%", color: "black", backgroundColor: "red" }} onClick={this.abrirModal}>CONFIRMAR</Button>
                        <Button style={{position: "relative", left: "-20%", color: "white", backgroundColor: "black" }} onClick={this.abrirModal}>CANCELAR</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Modalprodact;