//search mongoDB

//use sunil


//to return  the items are with conditions
db.items.find({rating:"3"})

//to use find with filter
db.items.find({rating:{$gte:"4"}})

//two conditions And
db.items.find({rating:{$gt:"3"},price:{$gt:"1000"}})

//two conditions OR
db.items.find({$or:[{rating:{$gt:"3"}},{price:{$gt:"10000"}}]})

//projections
db.items.find({rating:{$gte:"4"}},{rating:1,quantity:1})