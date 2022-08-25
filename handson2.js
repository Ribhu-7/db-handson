const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/students"

MongoClient.connect(url, async (err, db) => {
    if (err) {
      console.error("Error while connecting", err)
      return
    }
    const database = db.db("Human_Resoure")
    const dbCollection = database.collection("employee")
}
) 