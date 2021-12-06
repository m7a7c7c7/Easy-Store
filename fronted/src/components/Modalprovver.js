import React from 'react';
import { Button,Table } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Modalproveer extends React.Component {
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
                        <Button variant="warning" onClick={this.abrirModal} style={{ bottom: "10px", position: "absolute", left: "20%", width: "120px" }}>VER</Button>
                    </div></div>

                <Modal isOpen={this.state.abierto} style={modalStyles, { maxWidth: "80%",maxHeight:"100%"}}>
                    <ModalHeader>
                        Proveedor
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup >
                            <Label for="usuario">ID: &nbsp; </Label>
                            <input style={{ left: "45%", position: "fixed" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">NOMBRE: &nbsp; </Label>
                            <input style={{ left: "45%", position: "fixed" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">NIT: &nbsp; </Label>
                            <input style={{ left: "45%", position: "fixed" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">UBICACIÓN: &nbsp; </Label>
                            <input style={{ left: "45%", position: "fixed" }} type="text" id="usuario" />
                        </FormGroup>
                        <FormGroup >
                            <Label for="usuario">TELÉFONO: &nbsp; </Label>
                            <input style={{ left: "45%", position: "fixed" }} type="text" id="usuario" />
                        </FormGroup>
                    </ModalBody>
                    <div id="Layer1" style={{width:"100px",height:"150px",overflow:"a"}}>
                        <Table class="Table" style={{ position: "absolute", margin: "1", padding: "20px", boxSizing: "border-box",width:"relative"}}>
                            <thead>
                                <tr style={{ textAlign: "center", backgroundColor: "#FFF8B8" }}>
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>CANTIDAD</th>
                                    <th>ESPECIFICACIONES</th>
                                    <th>MARCA</th>
                                    <th>PRECIO DE COMPRA</th>
                                    <th>PRECIO DE VENTA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF", boxShadow: "0px 4px 4px 0px #0094FF", border: "1px", borderBlockColor: "blue" }}>
                                    <td>H7pCTjThFNVtV57djrmA</td>
                                    <td>SALSA DE TOMATE</td>
                                    <td>10</td>
                                    <td>500 GR</td>
                                    <td>FRUCO</td>
                                    <td>00000</td>
                                    <td>0000</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF", boxShadow: "0px 4px 4px 0px #0094FF", border: "1px", borderBlockColor: "blue" }}>
                                    <td>H7pCTjThFNVtV57djrmA</td>
                                    <td>SALSA DE TOMATE</td>
                                    <td>10</td>
                                    <td>500 GR</td>
                                    <td>FRUCO</td>
                                    <td>00000</td>
                                    <td>0000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <ModalFooter>
                        <Button style={{position: "relative", left: "-40%", color: "white", backgroundColor: "black" }} onClick={this.abrirModal}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Modalproveer;