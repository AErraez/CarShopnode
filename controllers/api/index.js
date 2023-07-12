const express = require('express')
const router= express.Router()
const jwt = require('jsonwebtoken')
const Apicred = require('../../models/apicred')
const Order = require('../../models/order')

const secretKey = "contraseniaapijeje"

const allowed_status= ['Servicio en Proceso', 'Servicio Terminado']
//jwt={user: asfsd , password= njsnk}

function jwtAuthMiddleware (req, res, next) {
    
    const token = req.headers.authorization?.replace('Bearer ', '');
    var decoded
    if (token) {
      try {
        decoded = jwt.verify(token, secretKey);
      } catch (err) {        
        return res.status(401).json({ error: 'JWT inválido' });
      }

      console.log(decoded)
      if (!decoded.user || !decoded.password){
        return res.status(401).json({ error: 'JWT inválido' });
      }

      Apicred.getUser(decoded.user,(error, user)=>{
        if (error){
           return res.status(500).json({code: 'UE', message: 'Unknown error'})
        }
        if (user== null){
            return res.status(401).json({ code: 'PF' , message: 'Credenciales incorrectas'})
        }

        if(user.password == decoded.password){
            console.log('User connected: ', user)
            next()
        }
    })
    } 
    
    
    
    else {
     
      return res.status(401).json({ error: 'JWT no encontrado' });
    }

    
  };

router.post('/', jwtAuthMiddleware, (req, res)=>{
    if (!req.body.id || !req.body.status){
        return res.status(401).json({ error: 'Request inválido' });
      }
    var id = req.body.id
    var status = [req.body.status]



    if(!allowed_status.includes(status[0])){
        return res.status(400).json({code: "UR", message: 'Order status inválido'})
    }

    Order.UpdateStatus(id,status, (error, updtorder)=>{
        if (error){
            return res.status(502).json({ code: "UE", message: "Unknown Error!" });
        } else {
            console.log("Order status updated!!!", updtorder)
            return res.json({code: 'OK', message: 'Order updated successfully', neworder: updtorder})
        }
    })
})

module.exports=router