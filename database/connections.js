const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');


// connect to database
async function main() { 
    const url = "mongodb+srv://jigudivinea:Dateng2018.@cluster0.7pmui.mongodb.net/";
    const client = new MongoClient(url);

    try {
        await client.connect();
        await listDatabases(client);
        
    } catch (e) {
        console.error(e);
    }finally{
        await client.close();
    }

}


// main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases(); // collects list of databases
    console.log("Databases");
    console.log(databasesList);
    databasesList.database.forEach(db=> {
        console.log(`- ${db.name}`);
    });
    console.log( )
}

const connectDb = async()=>{
    const URL = "mongodb+srv://jigudivinea:Dateng2018.@cluster0.7pmui.mongodb.net/";
    await mongoose.connect(URL);
    console.log('our db has connected');
}


module.exports = {
    listDatabases,
    connectDb
};
