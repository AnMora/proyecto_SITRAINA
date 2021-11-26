import React from 'react';
import ScrollToTop from "../JS/componentes/ScrollToTop";
import logo from "../multimedia/icono/SITRAINA.png";

const JDirectiva = (props) => {
    const Info_JDir = props.data.JDirectiva[0];

    // Secretario General
    const Deb_sg = props.data.secretario_general[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const SGeneral = props.data.secretario_general.map((item,position) => {
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
                                                {Deb_sg}
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

    // Secretario Adjunto
    const Deb_sa = props.data.secretario_adjunto[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const SAdjunto = props.data.secretario_adjunto.map((item,position) => {
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
                                                {Deb_sa}
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

    // Finanzas y Administración
    const Deb_fa = props.data.finanzas_administracion[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const FAdministracion = props.data.finanzas_administracion.map((item,position) => {
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
                                                {Deb_fa}
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

    // Afiliación y Propaganda
    const Deb_ap = props.data.afiliacion_propaganda[0].deberes.map((item,position) => {
        return(
            <>
                <li key={position} className="list-group-item text-center"><b className="mb-0 mr-3 font-weight-bold text-gray-800">{item.atribucion}</b></li>
            </>
        )
    })
    const APropaganda = props.data.afiliacion_propaganda.map((item,position) => {
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
                                                {Deb_ap}
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

    // Educación
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

    // SGeneral
    // SAdjunto
    // FAdministracion
    // ACorrespondecia
    // APropaganda
    // CSociales
    // 

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
                {/* Secretario General */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#SecretarioGeneral"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Secretario General</h4>
                    </a>
                    <div className="collapse show" id="SecretarioGeneral">
                        {SGeneral}
                    </div>
                </div>
                {/* Secretario Adjunto */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#SecretarioAdjunto"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Secretario Adjunto</h4>
                    </a>
                    <div className="collapse show" id="SecretarioAdjunto">
                        {SAdjunto}
                    </div>
                </div>
                {/* Finanzas y Administracion */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#FinanzasAdministracion"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Finanzas y Administración</h4>
                    </a>
                    <div className="collapse show" id="FinanzasAdministracion">
                        {FAdministracion}
                    </div>
                </div>
                {/* Actas y Correspondencia */}
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
                {/* Afiliación y Propaganda */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#AfiliacionPropaganda"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Afiliación y Propaganda</h4>
                    </a>
                    <div className="collapse show" id="AfiliacionPropaganda">
                        {APropaganda}
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
                {/* Educación */}
                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Educacion"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Educación</h4>
                    </a>
                    <div className="collapse show" id="Educacion">
                        {Educado}
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
                <ScrollToTop />
            </div>
        </>
    )
}

export default JDirectiva