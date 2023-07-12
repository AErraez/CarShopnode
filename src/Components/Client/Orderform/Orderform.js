

import { useState } from 'react';
import Layout from './layout';
import Car from './Car';
import Client from './Client';
import Service from './Services';
import Order from './Order';
import End from './End';
import Navbar from '../Misc/Nav';

export default function Orderform({user, setuser}) {
  const [CarInfo, setCar]= useState({})
  const [ClientInfo, setClient]= useState({})
  const [ServiceInfo, setService]= useState([])
  const [Step, setStep] = useState(0)
  return (
    <div className="App">
      <Navbar user={user} setuser={setuser}/>
      < Layout>
        {Step == 0 && < Client setclient={setClient} setstep={setStep} client={ClientInfo}/>}
        {Step ==1 &&< Car setcar={setCar} setstep={setStep} car={CarInfo}/>}
        {Step ==2 && < Service setservice={setService} setstep={setStep} servicechosen={ServiceInfo}/>}
        {Step ==3 && < Order client={ClientInfo} car={CarInfo} servicechosen={ServiceInfo} setchosen={setService} setstep={setStep}/>}
        {Step ==4 &&< End/>}
      </Layout>
    </div>
  );
}

;
