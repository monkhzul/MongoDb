const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.ATLAS_CONNECTION_URL, {useNewUrlParser:true})
    .then(()=> console.log(`Database connected succesfully`))
    .catch((err)=> console.log(err))

mongoose.Promise = global.Promise;