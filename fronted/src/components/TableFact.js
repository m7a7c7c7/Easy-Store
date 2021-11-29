import React from 'react';
import { Table, TableProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableFact = () => {
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
                            <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF", boxShadow: "5px 4px 4px 0px #0094FF", border: "1px", borderBlockColor: "blue" }}>
                                <td class="table-checkbox"><input type="checkbox"></input></td>
                                <td>H7pCTjThFNVtV57djrmA</td>
                                <td>1992912</td>
                            </tr>
                            <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF" }}>
                                <td class="table-checkbox"><input type="checkbox"></input></td>
                                <td>kqd5EVRqlbLM5lWEFaYl</td>
                                <td>128922</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        </>
    )
}

export default TableFact