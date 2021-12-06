import React, { useState, useEffect } from 'react';
import { Table, TableProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchFac } from './../APis/Facturascrud';

const TableFact = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        searchFac(setResults);
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
                                <th>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result) => (
                                <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF", boxShadow: "5px 4px 4px 0px #0094FF", border: "1px", borderBlockColor: "blue" }}>
                                    <td class="table-checkbox" id={result.ID}><input type="checkbox"></input></td>
                                    <td>{result.ID}</td>
                                    <td>{result.CC}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        </>
    )
}

export default TableFact