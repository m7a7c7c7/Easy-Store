import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { addProv } from './../APis/Proveedorescrud';

const Modalprovadd = () => {
    function save(even) {
        even.preventDefault();
        const ob = {
            NOMBRE: even.target[0].value,
            NIT: even.target[1].value,
            UBICACION: even.target[2].value,
            TELEFONO: even.target[3].value,
        }
        addProv(ob, (res) => {
            if (res == "Proveedor created") {
                window.location.href = "http://localhost:3000/proveedores";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal33" style={{ color: "black", backgroundColor: "#95FF0E", position: "absolute", bottom: "10px", left: "10%", width: "120px" }}>
                AÑADIR
            </button>
            <div class="modal fade" id="exampleModal33" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">PROVEEDOR</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div style={{ textAlign: "center" }}>
                                <h5>AÑADIR PROVEEDOR</h5>
                            </div>
                            <Form onSubmit={save}>
                                <Form.Group className="mb-3" controlId="nombre">
                                    <Form.Label>NOMBRE</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR NOMBRE" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="nit">
                                    <Form.Label>NIT</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR NIT" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="ubicación">
                                    <Form.Label>UBICACIÓN</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR UBICACIÓN" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="teléfono">
                                    <Form.Label>TELÉFONO</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR TELÉFONO" />
                                </Form.Group>
                                <Container fluid="md">
                                    <Row>
                                        <Button variant="dark" type="submit">
                                            AÑADIR
                                        </Button>
                                    </Row>
                                </Container>
                                <br />
                                <br />
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modalprovadd
