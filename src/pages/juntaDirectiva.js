import React from 'react';
import ScrollToTop from "../JS/componentes/ScrollToTop";
import logo from "../multimedia/icono/SITRAINA.png";

const JDirectiva = (props) => {
    const Info_JDir = props.data.JDirectiva[0];

    // Actas y correspondencia
    const Deb_ac = props.data.actas_correspondencia[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const ACorrespondecia = props.data.actas_correspondencia.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_ac}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
      })
    
    // Administracion
    const Deb_ad = props.data.administracion[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const Administrador = props.data.administracion.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_ad}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    // Finanzas
    const Deb_fn = props.data.finanzas[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const Financieros = props.data.finanzas.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_fn}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    // Culturales y Sociales
    const Deb_cs = props.data.culturales_sociales[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const CSociales = props.data.culturales_sociales.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_cs}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    // Afiliaciones
    const Deb_af = props.data.afiliaciones[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const Afiliacion = props.data.afiliaciones.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_af}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    // Conflictos
    const Deb_co = props.data.conflictos[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const Conflicto = props.data.conflictos.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_co}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    // Educacion
    const Deb_ed = props.data.educacion[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const Educado = props.data.educacion.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_ed}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    // La Mujer
    const Deb_lm = props.data.La_mujer[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const LMujer = props.data.La_mujer.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_lm}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    // Suplencia
    const Deb_su = props.data.suplencia[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const Suplente = props.data.suplencia.map((item,position) => {
        return (
            <>
                <a key={position} href="##" rel="noopener noreferrer">
                    <div className="container-fluid">
                        <div className="mb-3 mt-3">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto col-md-2">
                                            <img style={{ width: "120px" }} className="d-flex align-self-center m-3" src={logo} alt="Fines ilustrativos" />
                                        </div>
                                        <div className="col-auto col-md-10">
                                            <div className="font-weight-bold text-info text-uppercase mb-1">
                                                <span className="h4 font-weight-bold text-info text-uppercase mb-1">{item.representante}</span>
                                                <br />
                                                <span className="font-weight-bold text-primary">{item.cargo}</span>
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="mt-3 font-weight-bold text-info text-uppercase mb-1">Correo Electronico: </div>
                                                    <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                        {item.contactar}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* atribuciones */}
                                        <div className="card-body">
                                            <div className="mb-0 mr-3 mb-3 font-weight-bold text-info text-uppercase">Deberes o atribuciones:</div>
                                            <ul className="list-group">
                                                {Deb_su}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        )
    })

    return (
        <>
            <div className="container-fluid">
                <div className="mt-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                            <div className="h4 font-weight-bold text-info text-uppercase mb-1">
                                {Info_JDir.titulo}
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                    {Info_JDir.lema}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Actas y correspondencia */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#ActasCorrespondencia"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Actas y Correspondencia</h4>
                    </a>
                    <div className="collapse show" id="ActasCorrespondencia">
                        {ACorrespondecia}
                    </div>
                </div>
                {/* Administracion */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Administracion"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Administracion</h4>
                    </a>
                    <div className="collapse show" id="Administracion">
                        {Administrador}
                    </div>
                </div>
                {/* Finanzas */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Finanzas"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Finanzas</h4>
                    </a>
                    <div className="collapse show" id="Finanzas">
                        {Financieros}
                    </div>
                </div>
                {/* Culturales y Sociales */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#CulturalSocial"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Culturales y Sociales</h4>
                    </a>
                    <div className="collapse show" id="CulturalSocial">
                        {CSociales}
                    </div>
                </div>
                {/* Afiliaciones */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Afiliaciones"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Afiliaciones</h4>
                    </a>
                    <div className="collapse show" id="Afiliaciones">
                        {Afiliacion}
                    </div>
                </div>
                {/* Conflictos */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Conflictos"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Conflictos</h4>
                    </a>
                    <div className="collapse show" id="Conflictos">
                        {Conflicto}
                    </div>
                </div>
                {/* La Mujer */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#LaMujer"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">La Mujer</h4>
                    </a>
                    <div className="collapse show" id="LaMujer">
                        {LMujer}
                    </div>
                </div>
                {/* Educacion */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Educacion"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Educacion</h4>
                    </a>
                    <div className="collapse show" id="Educacion">
                        {Educado}
                    </div>
                </div>
                {/* Suplencia */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Suplencia"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Suplencia</h4>
                    </a>
                    <div className="collapse show" id="Suplencia">
                        {Suplente}
                    </div>
                </div>
                <ScrollToTop />
            </div>
        </>
    )
}

export default JDirectiva