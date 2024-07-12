import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";


const EditarClientes = () => {

    const navigate = useNavigate();

    //definimos los estados

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [numeroContacto, setNumeroContacto] = useState('');
    const [nit, setNit] = useState('');
    const [direccion, setDireccion] = useState('');
    const {id} = useParams();

    //creamos nuestra funcion de modificar clientes

    const ModificarClientes = async (e) =>{
        e.preventDefaul();
        await APIInvoke.invokePUT(`/api/clientes/${id}`,{
            nombres: nombres, apellidos: apellidos, cedula: cedula, correo: correo, numeroContacto: numeroContacto, nit: nit, direccion: direccion
        })

        navigate('/clientes');

        
    }
    useEffect(()=>{
        getclientes()
    });

    const getclientes = async ()=>{
        const response = await APIInvoke.invokePUT(`/api/clientes/${id}`)
        setNombres(response.nombres);
        setApellidos(response.apellidos);
        setCedula(response.cedula);
        setCorreo(response.correo);
        setNumeroContacto(response.numeroContacto);
        setNit(response.nit);
        setDireccion(response.direccion);

    } 





    return (
    <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
        <ContentHeader
            titulo={"Dashboard"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Dashboard"}
            ruta1={"/home"}
        />
        <section className="content">
            <div className="card">
            <div className="card-header">
                <h3 className="card-title">
                <Link
                    to={"/clientes/agregar"}
                    className="btn btn-block btn-primary btn-sm"
                ></Link>
                </h3>
                <div className="card-tools">
                <button
                    type="button"
                    className="btn btn-tool"
                    data-card-wadget="collapse"
                    title="collapse"
                >
                    <i className="fas fa-minus"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-tool"
                    data-card-wadget="collapse"
                    title="collapse"
                >
                    <i className="fas fa-times"></i>
                </button>
                </div>
            </div>
            <div className="card-body"></div>
            <form onSubmit={ModificarClientes}>
                        
                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor="nombres">Nombres</label>
                                <input type='text'
                                    className='form-control'
                                    placeholder='Ingrese sus nombres'
                                    id='nombres'
                                    name='nombres'
                                    value={nombres}
                                    onChange={(e) => setNombres(e.target.value)}
                                    required
                                    />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-user'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type='text' 
                                    className='form-control'
                                    placeholder='Ingrese sus apellidos'
                                    id='apellidos'
                                    name='apellidos'
                                    value={apellidos}
                                    onChange={(e) => setApellidos(e.target.value)}
                                    required
                                    />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-user'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor="cedula">Documento</label>
                                <input type='number' 
                                    className='form-control'
                                    placeholder='Ingrese su Documento'
                                    id='cedula'
                                    name='cedula'
                                    value={cedula}
                                    onChange={(e) => setCedula(e.target.value)}
                                    required
                                    />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-user'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor="correo">Correo Electronico</label>
                                <input type='email' 
                                    className='form-control'
                                    placeholder='Ingrese su correo'
                                    id='correo'
                                    name='correo'
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                    />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-user'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor="Telefono">Telefono</label>
                                <input type='number' 
                                    className='form-control'
                                    placeholder='Ingrese su telefono'
                                    id='numeroContacto'
                                    name='numeroContacto'
                                    value={numeroContacto}
                                    onChange={(e) => setNumeroContacto(e.target.value)}
                                    required
                                    />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-user'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor="nit">Nit</label>
                                <input type='number' 
                                    className='form-control'
                                    placeholder='Ingrese su Nit'
                                    id='nit'
                                    name='nit'
                                    value={nit}
                                    onChange={(e) => setNit(e.target.value)}
                                    required
                                    />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-user'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor="direccion">Direccion</label>
                                <input type='text' 
                                    className='form-control'
                                    placeholder='Ingrese su direccion'
                                    id='direccion'
                                    name='direccion'
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    required
                                    />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-user'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Editar</button>
                        </div>
                    </form>
            </div>
        </section>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default EditarClientes;