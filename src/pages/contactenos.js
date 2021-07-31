import React from 'react';
import ScrollToTop from '../JS/componentes/ScrollToTop';
import logo from '../multimedia/icono/SITRAINA.png';

const Contacto = (props) => {

    const Contacto = props.data.Contactenos[0];

    const Medios_Comunicacion = props.data.Medios.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-6 col-md-6 mb-4 mt-1">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="font-weight-bold text-info text-uppercase mb-1">{item.medio}</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">{item.contactar}</div>
                                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">{item.otro}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className={item.icon}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className="container-fluid">
                <div className="mt-4">
                        <div className="mb-4">
                            <div className="card border-bottom-info shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters text-center text-primary align-items-center">
                                        <div className="col mr-2">
                                            <img className="logoPresentacion" src={logo} alt="SITRAINA" data-tip data-for="vaio para tooltip"/>
                                            <div className="h4 font-weight-bold text-info text-uppercase mb-1">
                                                {Contacto.lema}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {Medios_Comunicacion}
                                    </div>
                                </div>
                            </div>
                        </div>
                    <ScrollToTop />
                </div>
            </div>    
        </>
    )
}

export default Contacto;
