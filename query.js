//  mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb query.js


db.process.find({ "idProject": "5e5d691396c05b0001952cd7" }).forEach(
    function(process) {
        print("process id: " + process._id);
    });

//db.project_invest.remove({ "id": "5e5c65db96c05b0001952c4b" })