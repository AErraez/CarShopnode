const mongoose = require('mongoose');


const URL = `mongodb+srv://arielon88:2028@cluster0.7t2wkvr.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URL)
.then(() => {
    console.log('Database connected!');
})
.catch((error)=> {
    console.log('Error connecting:', error);
});
