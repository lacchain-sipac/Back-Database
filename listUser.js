//mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb listUser.js

db.user.find({ 'proxyAddress': '0x45dec636664ced41a3e374059bc3cd4681054d8b' }).forEach(
    function(item) {
        print("surnames " + item.surnames);
        print("fullname " + item.fullname);
        print("email " + item.email);
        print("proxyAddress " + item.proxyAddress);

        item.roles.forEach(function(r) {
            print("email " + r.code);
        });

    });