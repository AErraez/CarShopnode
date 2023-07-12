import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Misc/Nav";
import Footer from "../Misc/Footer";
export default function Ordertable({user, setuser}) {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/user/order")
      .then((response) => {
        setdata(response.data.orders);
      })
      .catch((error) => {
        setdata([]);
        if (error.response && error.response.status === 401){
          navigate("/login");
        }
        

      });
  }, []);

  return (
    <div>
    <Navbar user={user} setuser={setuser}/>
    <div className="container">
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Vehículo</th>
            <th>Servicio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td> {item._id} </td>
              <td>
                <p>
                  Nombre: {item.client_info["first-name"]}{" "}
                  {item.client_info["last-name"]}
                </p>
              </td>
              <td>
                <p>Marca: {item.car_info.marca}</p>
                <p>Modelo: {item.car_info.model}</p>
                <p>Placa: {item.car_info.license}</p>
              </td>
              <td>
                <ul>
                  {item.service_info.map((service, index) => (
                    <li key={index}>{service}</li>
   
                  ))}
                </ul>
              </td>
              <td>{item.order_status[0]}
                 {item.order_status[0]=="Cita Agendada" ? <p>Fecha: {item.order_status[1]} </p> : null}
                 {item.order_status[0]=="Cancelada" ? <p>Motivo: {item.order_status[1]} </p> : null}
                 </td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={"#modal" + item._id}
                >
                  Revisar
                </button>

                <div
                  class="modal fade"
                  id={"modal" + item._id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Orden {item._id}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <h5>Datos cliente</h5>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>
                              Nombre:{" "}
                              <input
                                className="form-control"
                                name="first-name"
                                value={item.client_info["first-name"]}
                                required
                                readOnly
                              ></input>
                            </label>
                          </div>

                          <div className="form-group col-md-6">
                            <label>
                              Apellidos:{" "}
                              <input
                                className="form-control"
                                name="last-name"
                                value={item.client_info["last-name"]}
                                required
                                readOnly
                              ></input>
                            </label>
                          </div>
                        </div>
                        <div className="form-group col-md-4">
                          <label>
                            Correo:{" "}
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              value={item.client_info.email}
                              required
                              readOnly
                            ></input>
                          </label>
                        </div>

                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>
                              {item.client_info.id}{" "}
                              <input
                                className="form-control"
                                name="id-number"
                                readOnly
                                value={item.client_info["id-number"]}
                                required
                              ></input>
                            </label>
                          </div>
                        </div>
                        <div className="form-group col-md-8">
                          <label>
                            Dirección:{" "}
                            <input
                              className="form-control"
                              name="address"
                              required
                              readOnly
                              value={item.client_info.address}
                            ></input>
                          </label>
                        </div>

                        <div className="form-group col-md-3">
                          <label>
                            Número de telefono:{" "}
                            <input
                              className="form-control"
                              name="phone"
                              readOnly
                              value={item.client_info.phone}
                              required
                            ></input>
                          </label>
                        </div>

                        <h5>Datos Vehículo</h5>

                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>
                              Marca:{" "}
                              <input
                                className="form-control"
                                name="marca"
                                readOnly
                                value={item.car_info.marca}
                                required
                              ></input>
                            </label>
                          </div>
                          <div className="form-group col-md-6">
                            <label>
                              Modelo:{" "}
                              <input
                                className="form-control"
                                name="model"
                                readOnly
                                value={item.car_info.model}
                                required
                              ></input>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-3">
                            <label>
                              Año de fabricación:{" "}
                              <input
                                className="form-control"
                                readOnly
                                name="year"
                                value={item.car_info.year}
                                required
                              ></input>
                            </label>
                          </div>
                          <div className="form-group col-md-3">
                            <label>
                              Placa:{" "}
                              <input
                                className="form-control"
                                name="license"
                                readOnly
                                value={item.car_info.license}
                                required
                              ></input>
                            </label>
                          </div>
                          <div className="form-group col-md-6">
                            <label>
                              Chasis:{" "}
                              <input
                                className="form-control"
                                name="chasis"
                                readOnly
                                value={item.car_info.chasis}
                                required
                              ></input>
                            </label>
                          </div>
                        </div>
                        <div className="form-group col-md-10">
                          <label htmlFor="obs">Observaciones</label>
                          <textarea
                            className="form-control"
                            name="obs"
                            value={item.car_info.obs}
                            readOnly
                            placeholder="No ha detallado nigun dato extra del vehículo"
                          ></textarea>
                        </div>

                        <h5 className="py-3">Servicios Seleccionados</h5>
                        <div>
                          <ul>
                            {item.service_info.map((service) => (
                              <li>{service}</li>
                            ))}{" "}
                          </ul>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </div>
  );
}
