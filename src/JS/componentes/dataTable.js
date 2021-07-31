import React, { Component } from "react";
import InfoDataTable from "../JS/Utils/dataDataTable";
import DataTable from "react-data-table-component";

const paginacionOpciones = {
  rowsPerPageText: "Filas por pagina",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export class hojamiercoles extends Component {
  state = {
    pInfoHM: InfoDataTable,
    busqueda: "",
    encontrados: [],
    columnas: [],
  };

  onChange = async (e) => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    // console.log(this.state.busqueda);
    this.filtrarElementos();
  };

  asignarColumnas = () => {
    const columnas = [
      {
        name: "ID",
        selector: "id",
        sortable: true,
      },
      {
        name: "Nombre",
        selector: "nombre",
        sortable: true,
      },
      {
        name: "Color",
        selector: "color",
        sortable: true,
      },
      {
        name: "Tamano",
        selector: "tamano",
        sortable: true,
      },
    ];

    this.setState({ columnas: columnas });
  };

  filtrarElementos = () => {
    var search = pInfoHM.filter((item) => {
      if (
        item.nombre.toLowerCase().includes(this.state.busqueda) ||
        item.color
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.busqueda) ||
        item.tamano
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.busqueda)
      ) {
        return item;
      }
    });
    this.setState({ encontrados: search });
  };

  crearIndex = () => {
    var contador = 1;
    pInfoHM.map((elemento) => {
      elemento["id"] = contador;
      contador++;
    });
  };

  componentDidMount() {
    this.crearIndex();
    this.asignarColumnas();
    this.setState({ encontrados: pInfoHM });
  }

  render() {
    return (
        <div className="card border-left-info shadow mb-2">
          <a
            href="#CollapseInfo"
            className="d-block card-header"
            data-toggle="collapse"
            role="button"
            aria-expanded="true"
            aria-controls="collapseCard"
          >
            <h4 className="m-0 font-weight-bold text-primary">2021</h4>
          </a>
          <div className="collapse show" id="CollapseInfo">
            <div className="card-body">
              <div className="mb-0 mr-3 font-weight-bold text-gray-800">
                <div className="row">
                  <div className="container form-inline d-flex">
                    <input
                      type="text"
                      className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                      value={this.state.busqueda}
                      onChange={this.onChange}
                      placeholder="Buscar..."
                    />
                    <button type="submit" className="btn btn-primary mx-auto">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
                <DataTable
                  columns={this.state.columnas}
                  data={this.state.encontrados}
                  title="Utiliza la barra buscadora para encontrar lo que necesitas..."
                  pagination
                  paginationComponentOptions={paginacionOpciones}
                  noDataComponent={<p>No se encontro ningun elemento</p>}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default hojamiercoles;
