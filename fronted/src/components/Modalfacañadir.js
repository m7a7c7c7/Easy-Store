import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { addFac } from '../APis/Facturascrud';

const Modalfacadd = () => {
    function save(even) {
        even.preventDefault();
        const ob = {
            CC: even.target[0].value,
            TELEFONO: even.target[1].value,
            FECHA: even.target[2].value,
            METODO: even.target[3].value,
            PRECIOTOTAL: even.target[4].value,
        }
        addFac(ob, (res) => {
            if (res == "Factura created") {
                window.location.href = "http://localhost:3000/facturas";
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
                            <h5 class="modal-title" id="exampleModalLabel">FACTURA</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div style={{ textAlign: "center" }}>
                                <h5>AÑADIR FACTURA</h5>
                            </div>
                            <Form onSubmit={save}>
                                <Form.Group className="mb-3" controlId="cc">
                                    <Form.Label>CC</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR IDENTIFICACION" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="telefono">
                                    <Form.Label>TELEFONO</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR TELEFONO" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>FECHA</Form.Label>
                                    <Form.Control type="date" placeholder="INGRESAR FECHA" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="metodo">
                                    <Form.Label>MÉTODO DE PAGO</Form.Label>
                                    <Form.Control type="text" placeholder="INGRESAR MÉTODO DE PAGO" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="precio total">
                                    <Form.Label>PRECIO TOTAL DE COMPRA</Form.Label>
                                    <Form.Control type="number" placeholder="INGRESAR PRECIO TOTAL DE COMPRA" />
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

export default Modalfacadd;