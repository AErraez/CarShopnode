import { useState } from "react"

export default function Service ({setservice,setstep, servicechosen}) {
    const [alert,setalert]=useState("")

    function back (e){
        e.preventDefault()
        setstep(1)
    }

    function ischecked (servname){
        if (!servicechosen){
            return false
        }
        let validator= false
        servicechosen.forEach((serv)=>{
            return serv["name"]==servname ? validator=true :""
        })
        return validator

    }

    function handleCheckboxChange(serviceName) {

        const updatedServiceChosen = [...servicechosen];
        const serviceIndex = updatedServiceChosen.findIndex(serv => serv.name === serviceName)
        
        if (serviceIndex > -1) {
          updatedServiceChosen.splice(serviceIndex, 1) 
        } else {
          const selectedService = services.find(serv => serv.name === serviceName);
          updatedServiceChosen.push(selectedService); 
        }
        setservice(updatedServiceChosen)
    }

    function handleSubmit (e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        let serviceschosen=[]
        for (let i of formData.values()){
            serviceschosen.push(services[i])
        }
        setservice(serviceschosen)
    
        if (serviceschosen.length > 0){
           
            setstep(3)
        }
        else {
            setalert("Debe seleccionar por lo menos un servicio")
        }
    }
    const services= [{name: "Cambio de aceite", price: 10}, {name: "Cambio de frenos", price: 30}, {name: "Alineación y balanceo", price: 50}, 
    {name: "Diagnóstico general", price: 15}, {name: "Revisión sistema eléctrico", price: 12},{name: "Revisión de suspensión", price: 14} ]
   
    return(
        <div className="col d-flex justify-content-center">
        <div className="card w-75">
            <form onSubmit={handleSubmit} className="card-body">
                <h3 className="py-3">Seleccione los servicios a comprar: </h3>

                { servicechosen && 
                services.map((service, index)=>(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name={"service"+index} defaultValue={index} id={"service"+index}  onChange={()=>handleCheckboxChange(service.name)} checked={ischecked(service.name)} />
                        <label className="form-check-label" htmlFor={"service"+index}>
                            {service.name}  - US${service.price}
                        </label>
                    </div>
                ))
                }

                { !servicechosen && 
                services.map((service, index)=>(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name={"service"+index} defaultValue={index} id={"service"+index} />
                        <label className="form-check-label" htmlFor={"service"+index}>
                            {service.name}  - US${service.price}
                        </label>
                    </div>
                ))
                }

                {alert && (
                    <div className="alert alert-danger mt-3" role="alert">
                    {alert}
                    </div>
                )}
                <button className="btn btn-primary float-start" onClick={back}> Regresar </button>
                <button type="submit" className="btn btn-primary float-end">Siguiente</button>
            </form>
        </div>
        </div>
    )
}