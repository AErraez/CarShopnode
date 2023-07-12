

export default function Car ({setcar,setstep, car}) {
    function back (e){
        e.preventDefault()
        setstep(0)
    }
    
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
                        <label>Marca: <input className="form-control" name="marca" defaultValue={car["marca"]} required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Modelo: <input className="form-control" name="model" defaultValue={car["model"]} required></input></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                        <label>Año de fabricación: <input className="form-control" name="year" defaultValue={car["year"]}  required></input></label>
                        </div>
                        <div className="form-group col-md-3">
                        <label>Placa: <input className="form-control" name="license" defaultValue={car["license"]} required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Chasis: <input className="form-control" name="chasis" defaultValue={car["chasis"]} required></input></label> 
                        </div>
                    </div>
                    <div className="form-group col-md-10">
                    <label htmlFor="obs">Observaciones</label> 
                    <textarea className="form-control" name="obs" defaultValue={car["obs"]} placeholder="Detallar daños que presenta el vehículo. Ej: abolladuras, rayones, etc"></textarea>
                    </div>
                    <button className="btn my-2 btn-primary float-start" onClick={back}> Regresar </button>
                    <button type="submit" className=" my-2 btn btn-primary my-1 float-end">Siguiente</button>
                </form>
            </div>
        </div>
    )
}