//  mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb query.js


db.configuration.find().forEach(
    function(process) {
        print("process id: " + process.attempsQueue);
    });

//db.project_invest.remove({ "id": "5e5c65db96c05b0001952c4b" })