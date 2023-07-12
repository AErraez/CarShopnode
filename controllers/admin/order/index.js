const express = require("express");
const router = express.Router();
const Order = require("./../../../models/order");


const {authMiddleware, authMiddlewareAdmin} = require('../../../Middlewares/admin')

router.get("/", authMiddleware,(req, res) => {
    Order.getAllOrders((error, orders) => {
      if (error) {
        return res.status(502).json({ code: "UE", message: "Unknown Error!" });
      } else {
        return res.render("admin/orders", { data: orders, role: req.session.user.role , name: req.session.user.name});
      }
    });
  });
  
  
  router.put("/", authMiddleware, (req, res)=>{
      let id= req.body.id
      let status= ["Cita Agendada", req.body.date]
      Order.UpdateStatus(id,status, (error, updtorder)=>{
          if (error){
              return res.status(502).json({ code: "UE", message: "Unknown Error!" });
          } else {
              console.log("Order status updated!!!", updtorder)
              return res.json({code: 'OK', message: 'Order updated successfully', neworder: updtorder})
          }
      })
  
  })
  
  
  router.put("/cancel", authMiddlewareAdmin, (req, res)=>{
      let id= req.body.id
      let status= ["Cancelada", req.body.mot]
      Order.UpdateStatus(id,status, (error, updtorder)=>{
          if (error){
              return res.status(502).json({ code: "UE", message: "Unknown Error!" });
          } else {
              console.log("Order status updated!!!", updtorder)
              return res.json({code: 'OK', message: 'Order updated successfully', neworder: updtorder})
          }
      })
  
  })
  
  
  router.delete('/', authMiddlewareAdmin, (req, res)=>{
      let id= req.body.id
      Order.deleteOrder(id,(error, deleted)=>{
          if (error){
              return res.status(502).json({ code: "UE", message: "Unknown Error!" });
          } else {
              console.log("Order deleted!!!", deleted)
              return res.json({code: 'OK', message: 'Order deleted successfully'})
          }
      })
  })
  
  
  
  module.exports = router;