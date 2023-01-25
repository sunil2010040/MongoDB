//create anoother collection(table)
db.anotherCollection.insertOne({a:89})

//update value of one 
db.items.updateOne({name:"Mi note 7s"},{$set:{price:2}})

//update value of all
db.items.updateMany({name:"Mi note 7s"},{$set:{price:2}},{$set:{rating:1}})