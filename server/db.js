const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        maxPoolSize: 50, 
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    };
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("Database Connected");
    } catch(error){ 
        console.log(error);
        console.log("Databse Connection Error");
    }
};