import React from "react";
import ReactTooltip from "react-tooltip";

const Footer = (props) => {

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

    const Footer = props.data.PiePagina[0];
    return(
        <>
            <footer className="text-center sticky-footer bg-gray-900">
                <div className="container my-auto">
                    <div className="copyright my-auto text-light text-center my-auto">
                        {Footer_icons}
                    </div>
                </div>
                <h4 class="text-primary text-light text-center my-auto mt-2"><b>{Footer.Derechos}</b></h4>
            </footer>
        </>
    )
};

export default Footer