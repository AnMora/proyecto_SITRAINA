import React from 'react';
import ScrollToTop from '../JS/componentes/ScrollToTop';
import ReactPlayer from 'react-player';

const ENVIVO = (props) => {
    const EnVivo = props.data.transmision;

    return (
        <>
            <div className="container-fluid">
                <div className="mt-4">
                    <div className="alert alert-info" role="alert">
                        <h1 className="display-5"><b>SITRAINA INFORMA</b></h1>
                        <h2 className="display-5"><b>Martes 14 de Diciembre 2021</b></h2>
                        <h2 className="display-5"><b>Horario: 4 pm a 5pm</b></h2>
                        <h5 className="mt-3">
                            Contexto Político Nacional con el profesor Esteban Aguilar Ramírez - <b>ENVIVO</b>
                        </h5>
                    </div>

                    {EnVivo === "" ? "" : (
                        <div className="mt-4 mb-4">
                            <div className="card border-left-warning shadow h-100">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                        <ReactPlayer
                                            url={EnVivo}
                                            className="rounded"
                                            width="100%"
                                            height="100%"
                                            controls
                                            playing
                                            volume="0.4"
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Al final de todo contenido de paginas siempre el ScrollToTop Component */}
            <ScrollToTop />
        </>
    )
}

export default ENVIVO
