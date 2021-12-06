import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Facturas from './screens/Facturas';
import Home from './screens/Home';
import Login from './screens/Login';
import Productos from './screens/Productos';
import Proveedores from './screens/Proveedores';
import NotFound from './screens/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/proveedores" element={<Proveedores/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/facturas" element={<Facturas/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
