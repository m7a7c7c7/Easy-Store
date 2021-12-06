import React, { useState, useEffect } from 'react';
import { Table, TableProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchProd, idsearchProd } from '../APis/Productoscrud';


const TableProd = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        searchProd(setResults);
    }, []);

    
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
                            {results.map((result) => (
                                <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF", boxShadow: "5px 4px 4px 0px #0094FF", border: "1px", borderBlockColor: "blue" }}>
                                    <td class="table-checkbox"><input type="checkbox"  value={result.ID} id={result.NOMBRE}></input></td>
                                    <td>{result.ID}</td>
                                    <td>{result.NOMBRE}</td>
                                    <td>{result.CANTIDAD}</td>
                                    <td>{result.ESPECIFICACIONES}</td>
                                    <td>{result.MARCA}</td>
                                    <td>{result.PRECIOC}</td>
                                    <td>{result.PRECIOV}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        </>
    )
}

export default TableProd