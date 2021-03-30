// mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb inserQueue.js


var queue = [{
        "role": "role 1",
        "user": "user 1",
        "projectCodeHash": "projectCodeHash 1",
        "proxyAddressUserSession": "proxyAddressUserSession 1"
    },
    {
        "role": "role 2",
        "user": "user 2",
        "projectCodeHash": "projectCodeHash 2",
        "proxyAddressUserSession": "proxyAddressUserSession 2"
    }, {
        "role": "role 3",
        "user": "user 3",
        "projectCodeHash": "projectCodeHash 3",
        "proxyAddressUserSession": "proxyAddressUserSession 3"
    }
]

db.user_role_project_queue_.remove({});
db.user_role_project_queue_.insert(queue);