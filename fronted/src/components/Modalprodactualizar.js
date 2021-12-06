import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { actualizarProd } from './../APis/Productoscrud';
const Modalprodactualizar = () => {
    function save(even) {
        even.preventDefault();
        const ob = {
            ID: even.target[0].value,
            NOMBRE: even.target[1].value,
            MARCA: even.target[2].value,
            ESPECIFICACIONES: even.target[3].value,
            CANTIDAD: even.target[4].value,
            PRECIOC: even.target[5].value,
            PRECIOV: even.target[6].value,
        }
        actualizarProd(ob, (res) => {
            if (res == "Success") {
                window.location.href = "http://localhost:3000/productos";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleMod445" style={{ color: "black", backgroundColor: "red", position: "absolute", bottom: "10px", left: "40%", width: "120px" }}>
                ACTUALIZAR
            </button>
            <div class="modal fade" id="exampleMod445" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">PRODUCTO</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ textAlign: "center" }}>
                                <h5>ACTUALIZAR PRODUCTO</h5>
                            </div>
                            <Form onSubmit={save}>
                                <Form.Group className="mb-3" controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR ID" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="nombre">
                                    <Form.Label>NOMBRE</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR NOMBRE" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="marca">
                                    <Form.Label>MARCA</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR MARCA" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="especificaciones">
                                    <Form.Label>ESPECIFICACIONES</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR ESPECIFICACIONES" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="cantidad">
                                    <Form.Label>CANTIDAD</Form.Label>
                                    <Form.Control type="number" placeholder="INGRESAR CANTIDAD" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="precioc">
                                    <Form.Label>PRECIO DE COMPRA</Form.Label>
                                    <Form.Control type="number" placeholder="INGRESAR PRECIO DE COMPRA" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="preciov">
                                    <Form.Label>PRECIO DE VENTA</Form.Label>
                                    <Form.Control type="number" placeholder="INGRESAR PRECIO DE VENTA" />
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
                            <button type="button" class="btn" data-bs-dismiss="modal" style={{ backgroundColor: "black", color: "white" }}>CERRAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modalprodactualizar;