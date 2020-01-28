import React, { useState } from "react";
import { Form } from "../components/Form";
import { Nav } from "../components/Nav";
import { SearchResults } from "../components/Search";
import { History } from "../components/History";
import Axios from "axios";
import Swal from "sweetalert2";

export const Home = () => {
  let today = new Date();
  let currentYear = today.getFullYear();

  const [tracking, setTracking] = useState("");
  const [register, setRegister] = useState({
    isRegistered: false
  });
  const [year, setYear] = useState(currentYear.toString());
  const [data, setData] = useState({
    origin: "",
    status: "",
    tracking: "",
    destiny: "",
    type: "",
    notice: "",
    notes: "",
    detail: []
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    Axios.post(
      "https://serpostapi20191121050851.azurewebsites.net/api/serpost",
      {
        Anio: year,
        Filtro: 0,
        Tracking: tracking
      }
    )
      .then(function(response) {
        setData({
          origin: response.data.origen,
          status: response.data.estadoEnvio,
          tracking: response.data.nroTracking,
          destiny: response.data.destino,
          type: response.data.tipoEnvio,
          notice: "",
          notes: response.data.observacion,
          detail: response.data.detalle
        });

        Swal.fire({
          title: "Encontrado!",
          text: "Aquí esta la info de tu paquete",
          icon: "success",
          confirmButtonText: "Ok"
        });

        let hasDetail = response.data.detalle.length;
        if (hasDetail) {
          setRegister({
            isRegistered: true
          });
        }
      })
      .catch(function(error) {
        console.log(error.response);

        Swal.fire({
          title: "Error!",
          text: "Aun no tenemos data de tu paquete",
          icon: "error",
          confirmButtonText: "Ok"
        });
      });
  };

  const handleTracking = (e) => {
    setTracking(e.target.value);
  };
  const handleChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <>
      <header>
        <Nav />
        <div className="colorMode">
          <i className="icon icon-moon">
            <span>Color Mode</span>
          </i>
        </div>
      </header>
      <div className="content">
        <Form
          handleSubmit={handleSubmit}
          tracking={tracking}
          handleTracking={handleTracking}
          year={year}
          handleChange={handleChange}
          setTracking={setTracking}
        />
        <SearchResults data={data} />
        <History data={data} />
      </div>
    </>
  );
};
