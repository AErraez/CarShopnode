const express = require('express');
const router = express.Router();
const Order = require('./../../../models/order')
const {AuthMiddleware} = require('./../../../Middlewares/client')

router.get('/', AuthMiddleware,function(req,res){

    let username=req.session.user.username
    Order.getUserOrders(user=username,(error, orders)=>{
        if (error){
            res.status(500).json({code:'UE', message: 'Unknown error'})
        }
        else res.json({code: "OK", message: "Data retrieved successfully", orders: orders})
    })
})


router.post('/', AuthMiddleware,function(req, res){
    let data = {username: req.session.user.username}
    data['client_info']=req.body.client
    data['car_info']=req.body.car
    data['service_info']=req.body.services
    data['order_status']='Enviada'

    Order.createOrder(data, (error, order) => {
        if(error){
            return  res.status(500).json({ code: 'UE', message: 'Unkwown error'})
        }
        res.json({ code: 'OK', message: 'Saved successfully!', data: order})
    });
    
})

module.exports= router