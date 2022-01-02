import React, { useState } from 'react';
import ScrollToTop from '../JS/componentes/ScrollToTop';

const AlbumnesFotos = (props) => {
    const Info_AlbumnesFotos = props.data.HAlbumnesFotos[0];

    // const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState("");
    const [tempimgtitle, setTempImgTitle] = useState("");
    const [tempimgdescp, setTempImgDescp] = useState("");

    const getImg = (imgSrc, imgTitle, imgDescp) => {
        // console.log(imgSrc)
        setTempImgSrc(imgSrc);
        setTempImgTitle(imgTitle);
        setTempImgDescp(imgDescp);
        // setModel(true);
    };

    const Captura = props.data.Capturas.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-2 col-md-4 pics" onClick={() => getImg(item.img, item.titulo, item.descripcion)}>
                    <div className="m-2">
                        <img src={item.img} className='rounded-lg img-thumbnail'
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg" />
                    </div>
                </div>
            </>
        )
    })

    const Exposicion = props.data.Exposiciones.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-2 col-md-4 pics" onClick={() => getImg(item.img, item.titulo, item.descripcion)}>
                    <div className="m-2">
                        <img src={item.img} className='rounded-lg img-thumbnail'
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg" />
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className='container-fluid'>
                <div className="mt-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="h4 font-weight-bold text-info text-uppercase mb-1">
                                        {Info_AlbumnesFotos.titulo}
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                                {Info_AlbumnesFotos.lema}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Capturas"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Capturas</h4>
                    </a>
                    <div className="collapse show" id="Capturas">
                        <div className="row">
                            {Captura}
                        </div>
                    </div>
                </div>

                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Exposiciones"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h4 className="m-0 font-weight-bold text-primary">Exposiciones </h4>
                    </a>
                    <div className="collapse show" id="Exposiciones">
                        <div className="row">
                            {Exposicion}
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade bd-example-modal-lg"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title h4 font-weight-bold text-info text-uppercase mb-1" id="exampleModalLabel">
                                {tempimgtitle}
                            </div>
                            <small className='m-2'>{tempimgdescp}</small>
                        </div>
                        <div className="modal-body">
                            <img src={tempimgSrc} className='rounded-lg img-fluid' />
                        </div>
                        <div className="modal-footer">
                            <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            >
                            Cerrar
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <ScrollToTop />
        </>
    )
}

export default AlbumnesFotos;