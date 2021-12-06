import axios from "axios";

const url = "http://localhost:5000";

export function searchProd(callback){
    axios.get(url+"/Productos")
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export function idsearchProd(prod, callback){
    axios.get(url+"/Productos/"+prod.id,prod)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function addProd(prod, callback){
    axios.post(url+"/Productos",prod)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function actualizarProd(prod,callback){
    axios.put(url+"/Productos/"+prod.ID,prod)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

export function eliminarProd(prod,callback){
    axios.delete(url+"/Productos/"+prod.ID)
        .then((res)=>{
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}