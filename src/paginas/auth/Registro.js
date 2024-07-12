import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert';




const Registro = () => {
    // definimos el estado del componentes
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    const {nombre, email, password, confirmar} = usuario;

    const Onchange = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
    document.getElementById("nombre").focus();
},[])

    const RegistroCuenta = async () => {

        if(password !== confirmar){
            const msg = "las contraseñas son diferentes";
            swal({
                title:'Error',
                text: msg,
                icon:'error',
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

        }else if(password.length <10){
            const msg = "El password debe tener minimo 10 caracteres";
            swal({
                title:'Error',
                text: msg,
                icon:'error',
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

        }else{
            const data ={
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }

            const response = await APIInvoke.invokePOST('/api/usuarios', data);
            const mensaje = response.msg;
            if (mensaje === 'El usuario ya existe' ) {
                const msg = "El usuario ya existe";
                swal({
                    title:'Error',
                    text: msg,
                    icon:'error',
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
            }else{
                const msg = "El usuario fue creado correctamente"
                swal({
                    title:'Informacion',
                    text: msg,
                    icon:'success',
                    buttons:{
                        confirm:{
                            text:'ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });
                setUsuario({
                    nombre:'',
                    email:'',
                    password:'',
                    confirmar:''
                })
            }
        }
    }

    const Onsubmit = (e) => {
        e.preventDefault();
        RegistroCuenta();
    }
    return (



    <div className="hold-transition login-page">
        <div className="login-box">
            <div className="login-logo">
                <Link to={"#"}><b>Crear Usuarios</b></Link>
            </div>
            <div className='card'>
                <div className='card-body login-card-body'>
                    <p className='login-box-msg'>Intrese los datos de usuario</p>
                    <form onSubmit={Onsubmit}>
                        <div className='input-group mb-3'>
                            <input type='text' 
                            className='form-control'
                            placeholder='Nombre'
                            id='nombre'
                            name='nombre'
                            value={nombre}
                            onChange={Onchange}
                            required
                            />
                            <div className='input-group-append'>
                                <div className='input-group-text'>
                                    <span className='fas fa-user'/>
                                </div>
                            </div>
                        </div>

                        <div className='input-group mb-3'>
                            <input type='email' 
                            className='form-control'
                            placeholder='Email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={Onchange}
                            required
                            />
                            <div className='input-group-append'>
                                <div className='input-group-text'>
                                    <span className='fas fa-envelope'/>
                                </div>
                            </div>
                        </div>

                        <div className='input-group mb-3'>
                            <input type='password' 
                            className='form-control'
                            placeholder='Password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={Onchange}
                            required
                            />
                            <div className='input-group-append'>
                                <div className='input-group-text'>
                                    <span className='fas fa-lock'/>
                                </div>
                            </div>
                        </div>

                        <div className='input-group mb-3'>
                            <input type='password' 
                            className='form-control'
                            placeholder='Confirmar Password'
                            id='confirmar'
                            name='confirmar'
                            value={confirmar}
                            onChange={Onchange}
                            required
                            />
                            <div className='input-group-append'>
                                <div className='input-group-text'>
                                    <span className='fas fa-lock'/>
                                </div>
                            </div>

                            
                        </div>
                        <div className='social-auth-links text-center mb-3'>
                                <button type='submit' className='btn btn-block btn-primary' >Crear Cuenta</button>
                                    <Link to={"/"} className='btn btn-block btn-danger'>Regresar al Login</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    ) 
}

export default Registro