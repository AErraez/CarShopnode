
export default function Order ({client, car, servicechosen}){
    const total= servicechosen.reduce((accum,element)=>accum+element["price"],0)
    const services= [{name: "Cambio de aceite", price: 10}, {name: "Cambio de frenos", price: 30}, {name: "Alineación y balanceo", price: 50}, 
    {name: "Diagnóstico general", price: 15}, {name: "Revisión sistema eléctrico", price: 12},{name: "Revisión de suspensión", price: 14} ]

    function ischecked (servname){
        let validator= false
        servicechosen.forEach((serv)=>{
            return serv["name"]==servname ? validator=true :""
        })
        return validator

}


    return(
        <div className="col d-flex justify-content-center">
        <div className="card w-75">
            <div className="card-body">            
                <h3 className="py-3">Confirme su compra</h3>

                <h6>Datos cliente</h6>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Nombre: <input className="form-control" name="first-name" value={client["first-name"]} required></input></label>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Apellidos: <input className="form-control" name="last-name" value={client["last-name"]} required></input></label>
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <label>Correo: <input className="form-control" type="email" name="email" value={client["email"]} required></input></label>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label>Tipo de identificación:  </label>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="ced" value="Cédula" checked={client["id"]=="Cédula"} required></input> 
                            <label className="form-check-label" htmlFor="ced">Cédula</label>
                        </div>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="ruc" value="RUC" checked={client["id"]=="RUC"} ></input>
                            <label className="form-check-label" htmlFor="ruc">RUC</label>
                        </div>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="pass" value="Pasaporte" checked={client["id"]=="Pasaporte"} ></input>
                            <label className="form-check-label" htmlFor="pass">Pasaporte</label>
                        </div>
                    </div> 

                    <div className="form-group col-md-6">
                    <label>Número de identificación: <input className="form-control" name="id-number" value={client["id-number"]} required></input></label> 
                    </div>
                </div>
                <div className="form-group col-md-8">
                <label>Dirección: <input className="form-control" name="address" required value={client["address"]}></input></label>  
                </div>

                <div className="form-group col-md-3">
                <label>Número de telefono: <input className="form-control" name="phone" value={client["phone"]} required></input></label> 
                </div>

                <h6>Datos Vehículo</h6>

                <div className="row">
                        <div className="form-group col-md-6">
                        <label>Marca: <input className="form-control" name="marca" value={car["marca"]} required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Modelo: <input className="form-control" name="model" value={car["model"]} required></input></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                        <label>Año de fabricación: <input className="form-control" name="year" value={car["year"]}  required></input></label>
                        </div>
                        <div className="form-group col-md-3">
                        <label>Placa: <input className="form-control" name="license" value={car["license"]} required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Chasis: <input className="form-control" name="chasis" value={car["chasis"]} required></input></label> 
                        </div>
                    </div>
                    <div className="form-group col-md-10">
                    <label htmlFor="obs">Observaciones</label> 
                    <textarea className="form-control" name="obs" value={car["obs"]} placeholder="Detallar daños que presenta el vehículo. Ej: abolladuras, rayones, etc"></textarea>
                </div>


                <h6>Servicios Seleccionados</h6>

                {services.map((service, index)=>(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name={"service"+index} value={index} id={"service"+index} checked={ischecked(service.name)}/>
                        <label className="form-check-label" htmlFor={"service"+index}>
                            {service.name}  - US${service.price}
                        </label>
                    </div>
                ))}
                <h2>Total a pagar: US${total}</h2>
                <button className="btn btn-primary">Confirmar</button>
            </div>
        </div>
        </div>
    )
}