

export default function Service ({setservice,setstep}) {
    function handleSubmit (e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        let serviceschosen=[]
        for (let i of formData.values()){
            serviceschosen.push(services[i])
        }
        setservice(serviceschosen)
    
        setstep(3)
    }
    const services= [{name: "Cambio de aceite", price: 10}, {name: "Cambio de frenos", price: 30}, {name: "Alineación y balanceo", price: 50}, 
    {name: "Diagnóstico general", price: 15}, {name: "Revisión sistema eléctrico", price: 12},{name: "Revisión de suspensión", price: 14} ]
   
    return(
        <div className="col d-flex justify-content-center">
        <div className="card w-75">
            <form onSubmit={handleSubmit} className="card-body">
                <h3 className="py-3">Seleccione los servicios a comprar: </h3>
                {services.map((service, index)=>(
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name={"service"+index} value={index} id={"service"+index}/>
                        <label className="form-check-label" htmlFor={"service"+index}>
                            {service.name}  - US${service.price}
                        </label>
                    </div>
                ))}
                
                <button type="submit" className="btn btn-primary">Siguiente</button>
            </form>
        </div>
        </div>
    )
}