print("---------query-------------\n")
    //mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb queryTem.js

var i = 0
db.queue_tx.find({}).forEach(element => {
    try {
        print("----------------------%s", i++)

        print(element._id);
        print(element.userRole.proxyUser);
        print(element.userRole.proxyAddressAdministrator);
        print(element.userRole.role);
        print(element.userRole.insert);

        //  db.queue_tx_test1.insert(element);

    } catch (error) {

    }
    print('\n')
})