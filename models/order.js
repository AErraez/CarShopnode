const Orders = require('./../schemas/order');



function getAllOrders(cb) {
    Orders.find({})
    .then((elems) => {
        return cb(null, elems);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

function getUserOrders(user,cb) {
    Orders.find({username: user})
    .then((elems) => {
        return cb(null, elems);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

function getOrderbyId(id,cb) {
    Orders.find({_id: id})
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}


function UpdateOrder(id,b,cb) {
    Orders.find({_id: id})
    .then((order) => {
        order.client_info = b.client_info;
        order.car_info = b.car_info;
        order.service_info = b.service_info;
        order.save()
        .then((neworder)=>{
            return cb(null, neworder)
        })
        .catch((error)=>{
            console.log('Couldnt update order: ', error)
            return cb(error)
        })
        
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}



function UpdateStatus(id,status,cb) {
    Orders.findById({_id: id})
    .then((order) => {
        order.order_status = status;
        order.save()
        .then((neworder)=>{
            return cb(null, neworder)
        })
        .catch((error)=>{
            console.log('Couldnt update order: ', error)
            return cb(error)
        })
        
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

function createOrder(b, cb) {  //b tiene que ser un objeto que cumpla con el schema
    new Orders(b)
    .save()
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    });
}

function deleteOrder(id, cb) {
    Orders.findOneAndRemove({ _id: id})
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

exports.getAllOrders = getAllOrders;
exports.getUserOrders = getUserOrders;
exports.getOrderbyId = getOrderbyId;
exports.UpdateOrder= UpdateOrder
exports.UpdateStatus=UpdateStatus
exports.createOrder=createOrder
exports.deleteOrder= deleteOrder