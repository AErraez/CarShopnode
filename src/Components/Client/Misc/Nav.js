import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { apiurl } from "../../../Context/Apiurl";
export default function Navbar({ user = {}, setuser }) {
  
  const apiUrl = useContext(apiurl);

  function Logout() {
    axios
      .post(apiUrl+"user/logout")
      .then((response) => {
        console.log("Session ended");
        setuser({});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (user.name) {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img src="https://unitedhomeins.com/wp-content/uploads/2018/11/car-icon.png" alt="Logo" width="40" height="30" class="d-inline-block align-text-top"/>
          {" "}K-Chow
          </Link>


          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <span class="nav-link" href="#">Bienvenid@ {user.name}</span>
              </li>
              <li class="nav-item">
                <Link to="/review" class="nav-link active">
                  Revisar Ordenes
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link active" onClick={() => Logout()}>
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img src="https://unitedhomeins.com/wp-content/uploads/2018/11/car-icon.png" alt="Logo" width="40" height="30" class="d-inline-block align-text-top"/>
          {" "}K-Chow
          </Link>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/login" class="nav-link active">
                  Inicar Sesión
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/signup" class="nav-link active">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
