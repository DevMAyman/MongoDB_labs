use inventory




db.getCollection("products").find({})



db.getCollection("products").aggregate([
  { $match: { "category": { $ne: "" } } }, 
 {$group: {
      _id:  "$category",
     count: { $sum: 1 }
    }
},
 { $sort: { count: -1 }}

])
 
 
 
 
 db.getCollection("products").aggregate([
 {$match: { category: { $ne: null, $exists: true }  }}, // Exclude documents with null or undefined category

  { 
     $group: {
      _id:  "$category",
      totalPrice: { $sum: "$price" },

    }
},
{$sort: {totalPrice: -1}},
{$limit : 1}
])

db.getCollection("users").find({})

db.getCollection("orders").find({})


db.orders.aggregate([
   
   {
       $lookup:
         {
           from: "users",
           localField: "userId",
           foreignField: "_id",
           as: "user"
         }
   },

   {
      $lookup:
         {
           from: "products",
           localField: "productsIds",
           foreignField: "_id",
           as: "productOrderd"
         }
   },
          { $unwind: "$user" },
           { $unwind: "$user.ordersIds" },
       {
        $project:{
        "_id":0,
        "username" : "$user.name",
        "product" : "$productOrderd.name",
        "ordersId":"$user.ordersIds"
        }
     },
])
 
     
     
     
     db.orders.aggregate([
   {
      $lookup:
         {
           from: "users",
           localField: "userId",
           foreignField: "_id",
           as: "user"
         }
   },
    { $unwind: "$user" },
      {
       $match: {
        "user.name": "ahmed"
      }
  },
   {
      $lookup:
         {
           from: "products",
           localField: "productsIds",
           foreignField: "_id",
           as: "productOrderd"
         }
   },
      {
      $unwind: "$productOrderd"
   },
   {
 $group: {
         _id: "$_id", // Use the order ID as the grouping key
         totalOrderPrice: { $sum: "$productOrderd.price" },
         // Add other fields you want to keep in the result
      }
  },
  {
      $sort: {
         totalOrderPrice: -1 // Sort in ascending order, use -1 for descending order
      }
   },
   {$limit:1}
])
     
     






