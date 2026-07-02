const mongoose = require("mongoose")

const dns = require("dns")
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

function connecttodb(){
   mongoose.connect(process.env.mongo_uri)

    console.log("connect to db")
}
module.exports = connecttodb 