// mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb delete.js


var user = {
    "surnames": "Super Administrador",
    "fullname": "Administrador Honduras",
    "email": "admin@gmail.com",
    "roles": [{
        "code": "ROLE_1"
    }],
    "proxyAddress": "0x8b42de1a6e497613d911b03e9826a9d90c02c89a",
    "entity": "Administrador",
    "password": "wuqwlfzKVvKg7gXKA34w4cEPGYDqPzFs4UtJpzJp5hM=",
    "codeStatus": "H",
    "listHistory": [{
        "date": new Date(),
        "email": "",
        "rol": "ROLE_1",
        "status": "Habilitado"
    }],
    "completed": true,
    "createdBy": "system",
    "createdDate": new Date(),
    "lastModifiedBy": "system",
    "lastModifiedDate": new Date()
}


db.user.insert(user);