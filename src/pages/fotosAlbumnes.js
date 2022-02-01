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

    const AlbumRandom = props.data.Album_Random.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-2 col-md-4 pics" onClick={() => getImg(item.img, item.titulo, item.descripcion)}>
                    <div className="m-2">
                        <img src={item.img} className='rounded-lg img-thumbnail'
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                        alt="SITRAINA" />
                    </div>
                </div>
            </>
        )
    })

    const Album2019 = props.data.Album_2019.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-2 col-md-4 pics" onClick={() => getImg(item.img, item.titulo, item.descripcion)}>
                    <div className="m-2">
                        <img src={item.img} className='rounded-lg img-thumbnail'
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                        alt="SITRAINA" />
                    </div>
                </div>
            </>
        )
    })

    const GiraSur = props.data.Gira_SurSur.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-2 col-md-4 pics" onClick={() => getImg(item.img, item.titulo, item.descripcion)}>
                    <div className="m-2">
                        <img src={item.img} className='rounded-lg img-thumbnail'
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg" 
                        alt="SITRAINACR"
                        />
                    </div>
                </div>
            </>
        )
    })

    const GiraGuanacaste = props.data.Gira_Guanacaste.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-2 col-md-4 pics" onClick={() => getImg(item.img, item.titulo, item.descripcion)}>
                    <div className="m-2">
                        <img src={item.img} className='rounded-lg img-thumbnail'
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg" 
                        alt="SITRAINACR"
                        />
                    </div>
                </div>
            </>
        )
    })

    const GiraTLSSN = props.data.Gira_TLSSN.map((item,position) => {
        return (
            <>
                <div key={position} className="col-xl-2 col-md-4 pics" onClick={() => getImg(item.img, item.titulo, item.descripcion)}>
                    <div className="m-2">
                        <img src={item.img} className='rounded-lg img-thumbnail'
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg" 
                        alt="SITRAINACR"
                        />
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
                        href="#GiraTLSSN"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h5 className="m-0 font-weight-bold text-primary">Gira Turrialba/Limón/Sarapiquí/San Carlos/Naranjo</h5>
                    </a>
                    <div className="collapse show" id="GiraTLSSN">
                        <div className="row">
                            {GiraTLSSN}
                        </div>
                    </div>
                </div>

                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#GiraSur"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h5 className="m-0 font-weight-bold text-primary">Gira al Sur</h5>
                    </a>
                    <div className="collapse show" id="GiraSur">
                        <div className="row">
                            {GiraSur}
                        </div>
                    </div>
                </div>

                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#GiraGuanacaste"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h5 className="m-0 font-weight-bold text-primary">Gira Puntarenas/Guanacaste/Upala</h5>
                    </a>
                    <div className="collapse show" id="GiraGuanacaste">
                        <div className="row">
                            {GiraGuanacaste}
                        </div>
                    </div>
                </div>

                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#AlbumRandom"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h5 className="m-0 font-weight-bold text-primary">Album SITRAINA</h5>
                    </a>
                    <div className="collapse show" id="AlbumRandom">
                        <div className="row">
                            {AlbumRandom}
                        </div>
                    </div>
                </div>

                <div className="card border-bottom-info shadow mb-4">
                    <a
                        href="#Album2019"
                        className="d-block card-header"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="true"
                        aria-controls="collapseCard"
                    >
                        <h5 className="m-0 font-weight-bold text-primary">Album 2019</h5>
                    </a>
                    <div className="collapse show" id="Album2019">
                        <div className="row">
                            {Album2019}
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade bd-example-modal-lg shadow-lg"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title p font-weight-bold text-primary text-uppercase mb-1" id="exampleModalLabel">
                                {tempimgtitle}
                            </div>
                            <small className="mt-2">{tempimgdescp}</small>
                        </div>
                            <img src={tempimgSrc} className='img-fluid' alt="SITRAINACR"/>
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