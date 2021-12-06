import axios from "axios";

const url = "http://localhost:5000";

export function searchProv(callback){
    axios.get(url+"/Proveedores")
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export function addProv(prov, callback){
    axios.post(url+"/Proveedores",prov)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function actualizarProv(prov,callback){
    axios.put(url+"/Proveedores/"+prov.ID,prov)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function eliminarProv(prov,callback){
    axios.delete(url+"/Proveedores/"+prov.ID)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}