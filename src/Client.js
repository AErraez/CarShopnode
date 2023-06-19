

export default function Client ({setclient,setstep, client}) {
    function handleSubmit (e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        setclient(Object.fromEntries(formData.entries()))
        setstep(1)
    }
    return(
        <div className="col d-flex justify-content-center">
        <div className="card w-75">
            <form onSubmit={handleSubmit} className="card-body">
                <h3 className="py-3">Ingrese su información</h3>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Nombre: <input className="form-control" name="first-name" defaultValue={client["first-name"]} required></input></label>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Apellidos: <input className="form-control" name="last-name" defaultValue={client["last-name"]} required></input></label>
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <label>Correo: <input className="form-control" type="email" name="email" defaultValue={client["email"]} required></input></label>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label>Tipo de identificación:  </label>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="ced" defaultValue="Cédula" required></input> 
                            <label className="form-check-label" htmlFor="ced">Cédula</label>
                        </div>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="ruc" defaultValue="RUC" ></input>
                            <label className="form-check-label" htmlFor="ruc">RUC</label>
                        </div>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="pass" defaultValue="Pasaporte"  ></input>
                            <label className="form-check-label" htmlFor="pass">Pasaporte</label>
                        </div>
                    </div> 

                    <div className="form-group col-md-6">
                    <label>Número de identificación: <input className="form-control" name="id-number" defaultValue={client["id-number"]} required></input></label> 
                    </div>
                </div>
                <div className="form-group col-md-8">
                <label>Dirección: <input className="form-control" name="address" required defaultValue={client["address"]}></input></label>  
                </div>

                <div className="form-group col-md-3">
                <label>Número de telefono: <input className="form-control" name="phone" defaultValue={client["phone"]} required></input></label> 
                </div>
                
                <button type="submit" className="btn btn-primary float-end">Siguiente</button>
            </form>
        </div>
        </div>
    )
}