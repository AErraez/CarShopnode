import { Link } from "react-router-dom";

export default function End() {
    return (
      <div className="py-5 h-75 d-flex align-items-center justify-content-center">
        <div className="card text-center py-5 w-75">
          <h2 className="card-title mb-4">¡Muchas gracias por su compra!</h2>
          <p className="card-text">
            Su pedido ha sido procesado exitosamente. Esperamos que disfrute de
            nuestros servicios.
          </p>

          <Link to="/"><button  className="btn btn-primary mt-4">Volver al inicio</button></Link>
        </div>
      </div>
    );
  }