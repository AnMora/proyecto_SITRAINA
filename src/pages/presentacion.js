import React from 'react';
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';
import logo from '../multimedia/icono/SITRAINA.png';

const Presentacion = (props) => {

    const Presentacion = props.data.Presentacion[0];
    const Footer = props.data.PiePagina[0];

    const Footer_icons = props.data.PiePagina[0].iconos.map((item, position) => {
        return (
            <>
                <a
                    key={position}
                    className="btn btn-primary btn-circle m-1"
                    href={item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tip
                    data-for={item.Nombre}
                >
                    <i className={item.Icono}></i>
                    <ReactTooltip id={item.Nombre} place="bottom" type="dark" effect="solid">{item.Nombre}</ReactTooltip>
                </a>
            </>
          );
    })

    return (
        <>
            <div class="bg-color">
                <header className="jumbotron-fluid pt-1">
                    <div className="container text-center text-primary">
                        <img className="logoPresentacion" src={logo} alt="SITRAINA" data-tip data-for={Presentacion.Institucion}/>
                            <ReactTooltip id={Presentacion.Institucion} place="bottom" type="dark" effect="solid">{Presentacion.NombreCompleto}</ReactTooltip>
                        <h1><b>{Presentacion.Institucion}</b></h1>
                        <h3>{Presentacion.Lema}</h3>
                    </div>
                </header>

                <section className="container text-primary text-center">
                    <article className="col-12">
                    <h1 className="display-5">Bienvenidos a <b>{Presentacion.Institucion}</b></h1>
                    <h5 className="imp">{Presentacion.Aviso1}</h5>
                    <h5 className="mt-3">{Presentacion.Aviso2}</h5>
                    <div className="col-auto">
                        <Link to="/sitraina">
                            <a href="##" className="text-light btn btn-primary mt-2 mb-2" value="Ingresar">Ingresar</a>
                        </Link>
                    </div>
                    </article>
                    <hr className="my-1" />
                </section>
                
                <footer className="text-center sticky-footer">
                    <div className="container my-auto">
                        <div className="copyright my-auto">
                            {Footer_icons}
                        </div>
                    </div>
                    <h4 class="text-primary mt-2"><b>{Footer.Derechos}</b></h4>
                </footer>
            </div>
        </>
    )
}

export default Presentacion

