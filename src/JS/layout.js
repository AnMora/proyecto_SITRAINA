import React, { Component } from "react";
// Instalar react-router-dom
import { 
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

// Organizar los import por prioridad

// Import Contenido primera pagina
import Presentacion from '../pages/presentacion';

// Import Contenido despues de Presentacion
// Primera pagina
import Navbar from "./componentes/navbar";
import Header from "./componentes/header";
import Sitraina from '../pages/sitraina';
import ENVIVO from "../pages/transmision";
import Footer from './componentes/footer';

// Pagina sitraina/contactenos
import Contacto from "../pages/contactenos";

// Pagina sitraina/hojamiercoles
import HojaMiercoles from "../pages/hojamiercoles";

// Pagina sitraina/reglamentos
import Reglamentos from "../pages/reglamentos";

// Pagina sitraina/juntadirectiva
import JDirectiva from "../pages/juntaDirectiva";

// Pagina sitraina/fiscalia
import Fiscalia from "../pages/fiscalia";

// Pagina sitraina/convenios
import Convenios from "../pages/convenios";

// Import Estilos
import "../CSS/general.css";

// Importar Data
import EVV from "./Utils/datatransmision";
import DPres from './Utils/datapresentacion';
import DPP from './Utils/dataprincipal';
import DCont from './Utils/datacontactenos';
import DHmiercoles from "./Utils/datahojamiercoles";
import DRegla from "./Utils/datareglamentos";
import DJDirectiva from "./Utils/dataJuntaDirectiva";
import DFisc from "./Utils/datafiscalia";
import DConv from "./Utils/dataconvenios";

export class Layout extends Component {
  state = {
    pDataPresentacion: DPres,
    pDataTranmisiones: EVV,
    pDataPaginaPrincipal: DPP,
    pDataContactenos: DCont,
    pDataHmiercoles: DHmiercoles,
    pDataReglamentos: DRegla,
    pDataJDirectiva: DJDirectiva,
    pDataFiscalia: DFisc,
    pDataConvenios: DConv
  };

  render() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/sitraina/convenios">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataConvenios} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <div className="content">
                                    <Header data={this.state.pDataPresentacion} />
                                    <Convenios data={this.state.pDataConvenios} />
                                </div>
                            <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/sitraina/fiscalia">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataFiscalia} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <div className="content">
                                    <Header data={this.state.pDataPresentacion} />
                                    <Fiscalia data={this.state.pDataFiscalia} />
                                </div>
                            <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/sitraina/juntadirectiva">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataJDirectiva} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <div className="content">
                                    <Header data={this.state.pDataPresentacion} />
                                    <JDirectiva data={this.state.pDataJDirectiva} />
                                </div>
                            <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/sitraina/reglamentos">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataReglamentos} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <div className="content">
                                    <Header data={this.state.pDataPresentacion} />
                                    <Reglamentos data={this.state.pDataReglamentos} />
                                </div>
                            <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/sitraina/hojamiercoles">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataHmiercoles} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <div className="content">
                                    <Header data={this.state.pDataPresentacion} />
                                    <HojaMiercoles data={this.state.pDataHmiercoles} />
                                </div>
                            <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/sitraina/contactenos">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataContactenos} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <Header data={this.state.pDataPresentacion} />
                                <Contacto data={this.state.pDataContactenos} />
                                <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/EnVIVO">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataTranmisiones} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <Header data={this.state.pDataPresentacion} />
                                <ENVIVO data={this.state.pDataTranmisiones} />
                                <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/sitraina">
                        <div id="wrapper">
                            <Navbar data={this.state.pDataPaginaPrincipal} />
                            <main id="content-wrapper" className="d-flex flex-column">
                                <Header data={this.state.pDataPresentacion} />
                                <Sitraina data={this.state.pDataPaginaPrincipal} />
                                <Footer data={this.state.pDataPresentacion} />
                            </main>
                        </div>
                    </Route>
                    <Route path="/">
                        <Presentacion data={this.state.pDataPresentacion}/>
                    </Route>
                </Switch>
            </>
        </Router>
    );
  }
}

export default Layout;
