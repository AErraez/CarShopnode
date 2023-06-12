

export default function Car ({setcar,setstep}) {
    function handleSubmit (e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        setcar(Object.fromEntries(formData.entries()))
        setstep(2)
    }
    return(
        <div className="col d-flex justify-content-center">
            <div className="card w-75">
                <form onSubmit={handleSubmit} className="card-body">
                    <h3 className="py-3">Ingrese la información de su vehículo</h3>
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label>Marca: <input className="form-control" name="marca" required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Modelo: <input className="form-control" name="model" required></input></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                        <label>Año de fabricación: <input className="form-control" name="year" required></input></label>
                        </div>
                        <div className="form-group col-md-3">
                        <label>Placa: <input className="form-control" name="license" required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Chasis: <input className="form-control" name="chasis" required></input></label> 
                        </div>
                    </div>
                    <div className="form-group col-md-10">
                    <label htmlFor="obs">Observaciones</label> 
                    <textarea className="form-control" name="obs" placeholder="Detallar daños que presenta el vehículo. Ej: abolladuras, rayones, etc"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary my-1">Siguiente</button>
                </form>
            </div>
        </div>
    )
}