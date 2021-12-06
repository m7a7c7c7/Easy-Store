import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Modalprodedt extends React.Component {
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
                        <Button onClick={this.abrirModal} style={{ color: "black", backgroundColor: "#FF8A00", position: "absolute", bottom: "10px", left: "20%", width: "120px" }}>EDITAR</Button>
                    </div></div>

                <Modal isOpen={this.state.abierto} style={modalStyles, { maxWidth: "40%", maxHeight: "100%", overflowY: "scroll" }}>
                    <ModalHeader>
                        Producto
                    </ModalHeader>
                    <ModalBody>
                        <table class="table table-borderless" style={{ alignContent: "center", textAlign: "center", verticalAlign:"center" }}>
                            <tbody style={{ alignContent: "center" }}>
                                <tr>
                                    <td for="Nombre">NOMBRE: &nbsp; </td>
                                    <td><input type="text" id="Nombre" /></td>
                                </tr>
                                <tr>
                                    <td for="Marca">MARCA: &nbsp; </td>
                                    <td><input type="text" id="Marca" /></td>
                                </tr>
                                <tr>
                                    <td for="Especificaciones">ESPECIFICACIONES: &nbsp; </td>
                                    <td><input type="text" id="Especificaciones" /></td>
                                </tr>
                                <tr >
                                    <td for="Cantidad">CANTIDAD: &nbsp; </td>
                                    <td><input type="text" id="Cantidad" /></td>
                                </tr>
                                <tr>
                                    <td for="Precio de compra">PRECIO DE COMPRA: &nbsp; </td>
                                    <td><input type="text" id="Producto de compra" /></td>
                                </tr>
                                <tr>
                                    <td for="Precio de venta">PRECIO DE VENTA: &nbsp; </td>
                                    <td><input type="text" id="Precio de venta" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ position: "relative", left: "-40%", color: "black", backgroundColor: "red" }} onClick={this.abrirModal}>CONFIRMAR</Button>
                        <Button style={{ position: "relative", left: "-20%", color: "white", backgroundColor: "black" }} onClick={this.abrirModal}>CANCELAR</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Modalprodedt;