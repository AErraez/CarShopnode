import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Misc/Nav";
export default function Signup() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    axios
      .post("http://localhost:3002/user/signup", { user })
      .then((response) => {
        
        if (response.data.code == "Ok") {
          navigate("/login");
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
              <h5 class="card-title">Cree un usuario</h5>
              <form onSubmit={handleSubmit}>
              <div class="form-group">
                  <label for="name">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    required
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div class="form-group my-2">
                  <label for="username">Correo</label>
                  <input
                    type="email"
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
                  Registrarse
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
