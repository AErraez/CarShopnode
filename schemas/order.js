const mongoose = require('mongoose');

const orders = mongoose.Schema({
    username: {type: String},
    client_info: {type: Object},
    car_info: {type: Object},
    service_info : {type: [String]},
    order_status: {type: [String]}
});

const Orders = new mongoose.model('Order', orders);

module.exports = Orders;