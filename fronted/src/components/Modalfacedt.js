import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input} from 'reactstrap';
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
                        <Button onClick={this.abrirModal} style={{ color: "black", backgroundColor: "#FF8A00", position: "absolute", bottom: "10px", left: "40%", width: "120px" }}>EDITAR</Button>
                    </div></div>

                <Modal isOpen={this.state.abierto} style={modalStyles, { maxWidth: "40%", maxHeight: "100%", overflowY: "scroll" }}>
                    <ModalHeader>
                        Factura
                    </ModalHeader>
                    <ModalBody>
                        <table class="table table-borderless" style={{ alignContent: "center",textAlign:"center" }}>
                            <tbody>
                                <tr>
                                    <td for="usuario">ID: </td>
                                    <td><input type="text" id="usuario" /></td>
                                </tr>
                                <tr>
                                    <td for="usuario">CC: </td>
                                    <td><input type="text" id="usuario" /></td>
                                </tr>
                                <tr>
                                    <td for="usuario">TELÉFONO: </td>
                                    <td><input type="text" id="usuario" /></td>
                                </tr>
                                <tr>
                                    <td for="usuario">FECHA:  </td>
                                    <td><input type="text" id="usuario" /></td>
                                </tr>
                                <tr>
                                    <td for="usuario">MÉTODO DE PAGO:  </td>
                                    <td><input type="text" id="usuario" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </ModalBody>
                    <ModalHeader>
                        Productos vendidos:
                    </ModalHeader>
                    <table class="table table-borderless" style={{ alignContent: "center",textAlign:"center" }}>
                        <tbody>
                            <tr>
                                <td for="usuario">ID: &nbsp; </td>
                                <td><input type="text" id="usuario" /></td>
                                <td><Button style={{ color: "black", backgroundColor: "#FF8A00"}}>EDITAR</Button></td>
                            </tr>

                        </tbody>
                    </table>
                    <ModalFooter>
                        <Button style={{ position: "relative", left: "-40%", color: "black", backgroundColor: "red" }} onClick={this.abrirModal}>CONFIRMAR</Button>
                        <Button style={{ position: "relative", left: "-20%", color: "white", backgroundColor: "black" }} onClick={this.abrirModal}>CANCELAR</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Modalfacedt;