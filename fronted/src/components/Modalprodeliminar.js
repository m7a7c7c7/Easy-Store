import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { eliminarProd } from '../APis/Productoscrud';

const Modalprodeliminar = () => {
    function save(even) {
        even.preventDefault();
        const objeto = {
            ID: even.target[0].value,
        }
        eliminarProd(objeto, (res) => {
            if (res == "Success") {
                window.location.href = "http://localhost:3000/productos";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{color:"black",backgroundColor:"#0094FF",position:"absolute",bottom:"10px",left:"80%",width:"120px"}}>
                ELIMINAR
            </button>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">PRODUCTO</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div style={{ textAlign: "center" }}>
                                <h5>ELIMINAR PRODUCTO</h5>
                            </div>
                            <Form onSubmit={save}>
                                <Form.Group className="mb-3" controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="tex" placeholder="INGRESAR ID" />
                                </Form.Group>
                                <Container fluid="md">
                                    <Row>
                                        <Button variant="dark" type="submit">
                                            ELIMINAR
                                        </Button>
                                    </Row>
                                </Container>
                                <br />
                                <br />
                            </Form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modalprodeliminar;