import React, { useState, useEffect } from 'react';
import { Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchProv } from './../APis/Proveedorescrud';
const prov = localStorage.getItem('prov')


const TableProv = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    searchProv(setResults);
  }, []);
  
  return (
    <>
      <React.Fragment>
        <div>
          <Table class="Table" style={{ position: "absolute", margin: "1", padding: "20px", boxSizing: "border-box", top: "170px" }} width="90%">
            <thead>
              <tr style={{ textAlign: "center", backgroundColor: "#FFF8B8" }}>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>NIT</th>
                <th>TELEFONO</th>
                <th>UBICACIÓN</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr style={{ textAlign: "center", backgroundColor: "#EEFAFF", boxShadow: "5px 4px 4px 0px #0094FF", border: "1px", borderBlockColor: "blue" }}>
                  <td>{result.ID}</td>
                  <td>{result.NOMBRE}</td>
                  <td>{result.NIT}</td>
                  <td>{result.TELEFONO}</td>
                  <td>{result.UBICACION}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    </>
  )
}

export default TableProv