import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';

const RutasProtegidas = ({elemento}) => {
const [redirec, setRedirec] = useState(false);
const TokenExpirado = ()=>{
    const token = localStorage.getItem("token");
    if(!token){
        //si no tenemos token nos envia a la pagina principal
        setRedirec(true);
        return;
    }

    // decoficar el token para obtener la fecha de expiro
    const tokenD = JSON.parse(window.atob(token.split(".")[1]));
    const timeexp = tokenD.exp * 1000;// convertimos en milisegundos

    //obtener hora actual

    const actualTime = Date.now();

    if(actualTime >= timeexp){
        swal({
            title:'Expiró su sesión',
            text: "su sesion expiró vuelva a iniciar sesion",
            icon:'warning',
            buttons:{
                confirm:{
                    text:'ok',
                    value: true,
                    visible: true,
                    className: 'btn btn-danger',
                    closeModal: true
                }
            }
        });

        setTimeout(()=>{
            localStorage.removeItem("token");
            setRedirec(true);
        }, 1000); 
        return;
    }
    
};

// verificamos tiempo de expiracion cuando se monta el componente
useEffect(()=>{
    const timeout = setInterval(TokenExpirado, 100);
    return()=> clearInterval(timeout); // el limpia al desmontar el componente
},[]);

    if(redirec){
        return <Navigate to="/login"/>
}
//reenderizamos la ruta
    return elemento;
};

export default RutasProtegidas