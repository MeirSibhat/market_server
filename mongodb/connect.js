const mongoose = require('mongoose');
const config = require("config");
mongoose.connect(`mongodb+srv://meir:${config.get("mongoPass")}@cluster0-47zid.gcp.mongodb.net/shop_market?retryWrites=true&w=majority`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connected");
 
});

module.exports=db;
