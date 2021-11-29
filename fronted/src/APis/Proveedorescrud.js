import axios from "axios";
import Proveedores from './../screens/Proveedores';
const url = "http://localhost:5000";

export function searchProv(location, callback){
    axios.get(url+"/Proveedores")
    .then((res)=>{
        callback(res);
    })
    .catch((err)=>{
        callback(err);
    })
}