import React from 'react';
import ScrollToTop from '../JS/componentes/ScrollToTop';
import ReactPlayer from "react-player";

const AudiosVideos = (props) => {
  const Info_AudiosVideos = props.data.HAudiosVideos[0];

  const VideosYoutube = props.data.VideosYoutube.map((item,position) => {
    return (
        <>
          <div key={position} className="col-md-6">
            <div className="container-fluid">
              <div className="mb-3 mt-3">
              <div className="card">
                    <ReactPlayer
                        url={item.link}
                        className="card-img-top"
                        width="100%"
                        height="100%"
                        controls
                        volume="0.4"
                      />
                    <div className="card-body">
                    <div className="font-weight-bold text-info text-uppercase mb-1">
                        {item.titulo}
                      </div>
                      <small className="mt-2 font-weight-bold text-gray-800">
                        {item.año} / {item.mes} / {item.fecha}
                      </small>
                      {/* <div className="mb-2 font-weight-bold text-gray-800" maxlength="160">
                        {item.descripcion}
                      </div> */}
                      <details className="mb-2 font-weight-bold text-gray-800">
                        <summary>Contexto</summary>
                        <div className="mb-2 font-weight-bold text-gray-800" maxlength="160">
                          {item.descripcion}
                        </div>
                      </details>
                      <a key={position} className="btn btn-primary" href={item.link} target="_blank" rel="noopener noreferrer">Ver video</a>
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
        <div className='container-fluid'>
          <div className="mt-4 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="h4 font-weight-bold text-info text-uppercase mb-1">
                                  {Info_AudiosVideos.titulo}
                              </div>
                              <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                      <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                                          {Info_AudiosVideos.lema}
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
              href="#VideosYoutube"
              className="d-block card-header"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="collapseCard"
            >
              <h4 className="m-0 font-weight-bold text-primary">Comunicación SITRAINA</h4>
            </a>
            <div className="collapse show" id="VideosYoutube">
                <div className="row">
                  {VideosYoutube}
                </div>
            </div>
          </div>
        </div>
          <ScrollToTop />
      </>
  )
}

export default AudiosVideos;