import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Misc/Nav";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Login({setuser}) {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    axios
      .post( apiUrl+"user/login", { user })
      .then((response) => {
        
        if (response.data.code == "Ok") {
          setuser(response.data.user)
          console.log(response.data.user)
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Navbar />
    <div class="container">
      
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mt-5">
            <div class="card-body">
              <h5 class="card-title">Inicie sesión</h5>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="username">Correo</label>
                  <input
                    type="mail"
                    class="form-control"
                    name="username"
                    id="username"
                    required
                    placeholder="Ingrese su correo"
                  />
                </div>
                <div class="form-group my-2">
                  <label for="password">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    required
                    placeholder="Ingrese su contraseña"
                  />
                </div>
                <button type="submit" class="btn btn-primary my-3">
                  Iniciar sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
