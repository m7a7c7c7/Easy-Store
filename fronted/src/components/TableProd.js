import React from 'react';
import { Table, TableProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableProd = () => {
    return (
        <>
            <React.Fragment>
                <div>
                    <Table class="Table" style={{ position: "absolute", margin: "1", padding: "20px", boxSizing: "border-box", top: "170px" }} width="90%">
                        <thead>
                            <tr style={{ textAlign: "center", backgroundColor: "#FFF8B8" }}>
                                <th></th>
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
                            <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF", boxShadow: "5px 4px 4px 0px #0094FF", border: "1px", borderBlockColor: "blue" }}>
                                <td class="table-checkbox"><input type="checkbox"></input></td>
                                <td>H7pCTjThFNVtV57djrmA</td>
                                <td>SALSA DE TOMATE</td>
                                <td>10</td>
                                <td>500 GR</td>
                                <td>FRUCO</td>
                                <td>00000</td>
                                <td>00000</td>
                            </tr>
                            <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF" }}>
                                <td class="table-checkbox"><input type="checkbox"></input></td>
                                <td>kqd5EVRqlbLM5lWEFaYl</td>
                                <td>FIDEOS</td>
                                <td>8</td>
                                <td>500 GR</td>
                                <td>MUÑECA</td>
                                <td>00000</td>
                                <td>00000</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        </>
    )
}

export default TableProd