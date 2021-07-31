import React from "react";

const RSociales = (props) => {

    const RSociales_icons = props.data.PiePagina[0].iconos.map((item, position) => {
        return (
            <>
                <a
                key={position}
                href={item.Link}
                target="_blank"
                id="alertsDropdown"
                role="button"
                title={item.Nombre}
                >
                    <i className={item.Icono}></i>
                </a>
            </>
        );
    })

    return(
        <>
            {RSociales_icons}
        </>
    )
};

export default RSociales;
