import { Link } from "react-router-dom";
import Navbar from "../Misc/Nav";
import Footer from "../Misc/Footer";
import bgimage from "./public/public.jpg";

const services = [
  { name: "Cambio de aceite", price: 10 },
  { name: "Cambio de frenos", price: 30 },
  { name: "Alineación y balanceo", price: 50 },
  { name: "Diagnóstico general", price: 15 },
  { name: "Revisión sistema eléctrico", price: 12 },
  { name: "Revisión de suspensión", price: 14 },
];

export default function Landing({ user, setuser }) {
  return (
    <div>
      <Navbar user={user} setuser={setuser} />
      <div
        class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
        bis_skin_checked="1"
      >
        <div class="col-md-5 p-lg-5 mx-auto my-5" bis_skin_checked="1">
          <h1 class="display-4 font-weight-normal">K-Chow</h1>
          <h1 class="display-4 font-weight-normal pb-3">Car Services</h1>
          <p class="lead font-weight-normal">
            Contamos con los mejores talleres y mecánicos del país.
          </p>
          <p class="lead font-weight-normal">Hacemos posible lo imposible.</p>
          <Link
            to={user.name ? "/order" : "/login"}
            class="btn btn-outline-primary"
          >
            Ordenar
          </Link>
        </div>
      </div>
      <div class="container w-100 my-md-3 pl-md-3" bis_skin_checked="1">
        <div class="row">
          <div
            class="bg-dark mr-md-3 pt-3 px-3 pt-md-5  text-center col-6 text-white overflow-hidden"
            bis_skin_checked="1"
          >
            <div class="my-2 py-3" bis_skin_checked="1">
              <h3 class="display-5">El mejor servicio</h3>
              <p class="lead">
                Escoja entre los distintos servicios ofrecidos por nuestros
                talleres:
              </p>

              {services.map((service) => (
                <p class="lead py-0 my-0">{service.name}</p>
              ))}
            </div>
            
          </div>
          <div class="col-6">
            <img
              class="img-fluid h-100"
              src="https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/09/car-repair.jpg"
            />
          </div>
        </div>
        <div class="row py-3">
          <div class="col-6">
            <img
              class="img-fluid h-100"
              src="https://media.cntraveler.com/photos/5ef615ec35e172d48c53d2cd/master/w_1600%2Cc_limit/Mazda6-courtesy-mazda.jpg"
            />
          </div>
          <div
            class="col-6 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
            bis_skin_checked="1"
          >
            <div class="my-4 p-4" bis_skin_checked="1">
              <h2 class="display-5">Agenda tu cita</h2>
              <p class="lead">
                Tu carro estará listo en menos de 3 días laborables.
              </p>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
