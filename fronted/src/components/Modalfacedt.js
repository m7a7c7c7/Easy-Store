import React from 'react';
import { Button,Table } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Modalfacedt extends React.Component {
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
                        <Button onClick={this.abrirModal} style={{color:"black",backgroundColor:"#FF8A00",position:"absolute",bottom:"10px",left:"40%",width:"120px"}}>EDITAR</Button>
                    </div></div>

                <Modal isOpen={this.state.abierto} style={modalStyles, { maxWidth: "40%",maxHeight:"100%",overflowY:"scroll"}}>
                    <ModalHeader>
                        Factura
                    </ModalHeader>
                    <ModalBody>
                        <div style={{alignContent:"center"}}>
                        <FormGroup >
                            <Label for="usuario">ID: &nbsp; </Label>
                            <input style={{left:"50%",position:"relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">CC: &nbsp; </Label>
                            <input style={{ left: "45%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">TELÉFONO: &nbsp; </Label>
                            <input style={{ left: "35%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">FECHA: &nbsp; </Label>
                            <input style={{ left: "45%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">MÉTODO DE PAGO: &nbsp; </Label>
                            <input style={{ left: "35%", position: "relative" }} type="text" id="usuario" />
                        </FormGroup>
                        </div>
                    </ModalBody>
                    <ModalHeader>
                        Productos vendidos:
                    </ModalHeader>
                    <ModalBody>
                        <div style={{alignContent:"center"}}>
                        <FormGroup >
                            <Label for="usuario">ID: &nbsp; </Label>
                            <input style={{left:"15%",position:"relative" }} type="text" id="usuario" />
                            <Button style={{color:"black",backgroundColor:"#FF8A00",position:"relative",bottom:"10px",left:"30%",width:"120px"}}>EDITAR</Button>
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

export default Modalfacedt;