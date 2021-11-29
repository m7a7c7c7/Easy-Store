import React from 'react';
import { Table, TableProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchProv } from '../APis/Proveedorescrud';
const prov=localStorage.getItem('prov')

const TableProv = () => {
  searchProv(prov,(res)=>{
      console.log(res);
  })
  return (
    <>
      <React.Fragment>
        <div>
          <Table class="Table" style={{position:"absolute",margin:"1",padding:"20px",boxSizing:"border-box", top:"170px"}} width="90%">
            <thead>
              <tr style={{textAlign:"center",backgroundColor:"#FFF8B8"}}>
                <th></th>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>NIT</th>
                <th>TELÉFONO</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{textAlign:"center",backgroundColor:"#EEFAFF",boxShadow:"5px 4px 4px 0px #0094FF",border:"1px",borderBlockColor:"blue"}}>
                <td class="table-checkbox"><input type="checkbox"></input></td>
                <td>H7pCTjThFNVtV57djrmA</td>
                <td>JAIVISA</td>
                <td>19028812</td>
                <td>313477902</td>
              </tr>
              <tr style={{textAlign:"center",backgroundColor:"#EEFAFF"}}>
                <td class="table-checkbox"><input type="checkbox"></input></td>
                <td>kqd5EVRqlbLM5lWEFaYl</td>
                <td>VERDUFRUTAS</td>
                <td>18918282</td>
                <td>3129918232</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    </>
  )
}

export default TableProv
