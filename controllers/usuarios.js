//desestructuro 
const {response, request} = require('express');


const usuariosGet = (req = request, res = response) => {

    const {query, nombre ='no especificado ', apikey, page=10, limit} = req.query;
    res.json({
        msg: 'get API- controlador',
        query,
        nombre,
        apikey,
        page,
        limit
    });
}


 const usuariosPost = (req, res = response) => {
    //desestructuración del body
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API-controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API-controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API-controlador'
    });
}

const usuariosPatch = (req, res = response)=>{
    res.json({
        msg: 'patch API- controlador'
    });
}

//estoy exportando un objeto
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}