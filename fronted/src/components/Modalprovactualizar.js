import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { actualizarProv } from './../APis/Proveedorescrud';

const Modalprovactualizar = () => {
    function save(even) {
        even.preventDefault();
        const obj = {
            ID: even.target[0].value,
            NOMBRE: even.target[1].value,
            NIT: even.target[2].value,
            UBICACION: even.target[3].value,
            TELEFONO: even.target[4].value
        }
        actualizarProv(obj, (res) => {
            if (res == "Success") {
                window.location.href = "http://localhost:3000/proveedores";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ color: "black", backgroundColor: "red", position: "absolute", bottom: "10px", left: "40%", width: "120px" }} >ACTUALIZAR</button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">PROVEEDOR</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ textAlign: "center" }}>
                                <h5>ACTUALIZAR PROVEEDOR</h5>
                            </div>
                            <Form onSubmit={save}>
                                <Form.Group className="mb-3" controlId="ID">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR ID" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="NOMBRE">
                                    <Form.Label>NOMBRE</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR NOMBRE" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="NIT">
                                    <Form.Label>NIT</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR NIT" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="UBICACION">
                                    <Form.Label>UBICACIÓN</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR UBICACIÓN" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="TELEFONO">
                                    <Form.Label>TELÉFONO</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR TELÉFONO" />
                                </Form.Group>
                                <Container fluid="md">
                                    <Row>
                                        <Button variant="dark" type="submit">
                                            ACTUALIZAR
                                        </Button>
                                    </Row>
                                </Container>
                                <br />
                                <br />
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" style={{backgroundColor:"red",color:"white"}} data-bs-dismiss="modal">CANCELAR</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modalprovactualizar;
