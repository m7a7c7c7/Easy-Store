import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { addProd } from '../APis/Productoscrud';
const Modalprodadd = () => {
    function save(even) {
        even.preventDefault();
        const ob = {
            NOMBRE: even.target[0].value,
            MARCA: even.target[1].value,
            ESPECIFICACIONES: even.target[2].value,
            CANTIDAD: even.target[3].value,
            PRECIOC: even.target[4].value,
            PRECIOV: even.target[5].value,
        }
        addProd(ob, (res) => {
            if (res == "Producto created") {
                window.location.href = "http://localhost:3000/productos";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleMod" style={{color:"black",backgroundColor:"#95FF0E",position:"absolute",bottom:"10px",left:"60%",width:"120px"}}>
                AÑADIR
            </button>
            <div class="modal fade" id="exampleMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">PRODUCTO</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div style={{ textAlign: "center" }}>
                                <h5>AÑADIR PRODUCTO</h5>
                            </div>
                            <Form onSubmit={save}>
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
                                            AÑADIR
                                        </Button>
                                    </Row>
                                </Container>
                                <br />
                                <br />
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" data-bs-dismiss="modal" style={{backgroundColor:"black",color:"white"}}>CERRAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modalprodadd