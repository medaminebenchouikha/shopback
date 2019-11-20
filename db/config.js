const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopapp",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

module.exports={mongoose};