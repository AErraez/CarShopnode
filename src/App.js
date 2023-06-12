
import './App.css';
import { useState } from 'react';
import Layout from './layout';
import Car from './Car';
import Client from './Client';
import Service from './Services';
import Order from './Order';

function App() {
  const [CarInfo, setCar]= useState({})
  const [ClientInfo, setClient]= useState({})
  const [ServiceInfo, setService]= useState([])
  const [Step, setStep] = useState(0)
  return (
    <div className="App">
      < Layout>
        {Step == 0 && < Client setclient={setClient} setstep={setStep}/>}
        {Step ==1 &&< Car setcar={setCar} setstep={setStep}/>}
        {Step ==2 && < Service setservice={setService} setstep={setStep}/>}
        {Step ==3 && < Order client={ClientInfo} car={CarInfo} servicechosen={ServiceInfo}/>}
        <button onClick={()=>console.log(CarInfo, ClientInfo, ServiceInfo)}>Consultar</button>
      </Layout>
    </div>
  );
}

export default App;
