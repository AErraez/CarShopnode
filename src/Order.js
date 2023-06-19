
export default function Order ({client, car, servicechosen, setstep}){
    function addDays( days) {
        let date= new Date()
        date.setDate(date.getDate() + days);
        return date;
      }

    const delivery= addDays(3)

    const total= servicechosen.reduce((accum,element)=>accum+element["price"],0)
    
    const services= [{name: "Cambio de aceite", price: 10}, {name: "Cambio de frenos", price: 30}, {name: "Alineación y balanceo", price: 50}, 
    
    {name: "Diagnóstico general", price: 15}, {name: "Revisión sistema eléctrico", price: 12},{name: "Revisión de suspensión", price: 14} ]

    function back (e){
        e.preventDefault()
        setstep(2)
    }

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

                <h5>Datos cliente</h5>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Nombre: <input className="form-control" name="first-name" value={client["first-name"]} required readOnly></input></label>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Apellidos: <input className="form-control" name="last-name" value={client["last-name"]} required readOnly></input></label>
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <label>Correo: <input className="form-control" type="email" name="email" value={client["email"]} required readOnly></input></label>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label>Tipo de identificación:  </label>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="ced" value="Cédula" checked={client["id"]=="Cédula"} readOnly required></input> 
                            <label className="form-check-label" htmlFor="ced">Cédula</label>
                        </div>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="ruc" value="RUC" readOnly checked={client["id"]=="RUC"} ></input>
                            <label className="form-check-label" htmlFor="ruc">RUC</label>
                        </div>
                        <div className="form-check form-check-inline"> 
                            <input className="form-check-input" type="radio" name="id" id="pass" value="Pasaporte" readOnly checked={client["id"]=="Pasaporte"} ></input>
                            <label className="form-check-label" htmlFor="pass">Pasaporte</label>
                        </div>
                    </div> 

                    <div className="form-group col-md-6">
                    <label>Número de identificación: <input className="form-control" name="id-number" readOnly value={client["id-number"]} required></input></label> 
                    </div>
                </div>
                <div className="form-group col-md-8">
                <label>Dirección: <input className="form-control" name="address" required readOnly value={client["address"]}></input></label>  
                </div>

                <div className="form-group col-md-3">
                <label>Número de telefono: <input className="form-control" name="phone" readOnly value={client["phone"]} required></input></label> 
                </div>

                <h5>Datos Vehículo</h5>

                <div className="row">
                        <div className="form-group col-md-6">
                        <label>Marca: <input className="form-control" name="marca" readOnly value={car["marca"]} required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Modelo: <input className="form-control" name="model" readOnly value={car["model"]} required></input></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-3">
                        <label>Año de fabricación: <input className="form-control" readOnly name="year" value={car["year"]}  required></input></label>
                        </div>
                        <div className="form-group col-md-3">
                        <label>Placa: <input className="form-control" name="license" readOnly value={car["license"]} required></input></label>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Chasis: <input className="form-control" name="chasis" readOnly value={car["chasis"]} required></input></label> 
                        </div>
                    </div>
                    <div className="form-group col-md-10">
                    <label htmlFor="obs">Observaciones</label> 
                    <textarea className="form-control" name="obs" value={car["obs"]} readOnly placeholder="No ha detallado nigun dato extra del vehículo"></textarea>
                </div>


                <h5 className="py-3">Servicios Seleccionados</h5>

                {services.map((service, index)=>(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name={"service"+index} value={index} id={"service"+index} readOnly checked={ischecked(service.name)} />
                        <label className="form-check-label" htmlFor={"service"+index}>
                            {service.name}  - US${service.price}
                        </label>
                    </div>
                ))}
                <hr className="py-2"/>
                <h2>Total a pagar: US${total}</h2>
                <h2>Fecha estimada de entrega: {delivery.toLocaleString()}</h2>

                <button className="btn btn-primary float-start" onClick={back}> Regresar </button>
                <button className="btn btn-primary float-end" onClick={()=>setstep(4)}>Confirmar</button>
            </div>
        </div>
        </div>
    )
}