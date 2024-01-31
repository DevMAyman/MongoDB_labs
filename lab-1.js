use FacultySystemDB

//1-3

db.student.insertOne(

                      {

                        "firstName":"Mohamed",
                        "lastName":"Ayman",
                        "age":19,
                        "faculty":{"name":"Ain-Shams",
                                    "address":"Abbasya"},
                        "grades":[

                            {"courseName":"english",

                                  "grade":30,

                                  "pass":true

                            },

                            {"courseName":"MongoDB",

                                  "grade":30,

                                  "pass":true

                            }],

                        "isFired": true,         

                      }      

)







db.student.insertMany([

  {

    "firstName": "Alice",

    "lastName": "Johnson",

    "age": 22,

    "faculty": {

      "name": "Harvard",

      "address": "Cambridge"

    },

    "grades": [

      {

        "courseName": "math",

        "grade": 85,

        "pass": true

      },

      {

        "courseName": "biology",

        "grade": 92,

        "pass": true

      }

    ],

    "isFired": false

  },

  {

    "firstName": "Bob",

    "lastName": "Ahmed",

    "age": 28,

    "faculty": {

      "name": "MIT",

      "address": "Boston"

    },

    "grades": [

      {

        "courseName": "computer science",

        "grade": 95,

        "pass": true

      },

      {

        "courseName": "physics",

        "grade": 88,

        "pass": true

      }

    ],

    "isFired": false

  },

  {

    "firstName": "Ahmed",

    "lastName": "Brown",

    "age": 23,

    "faculty": {

      "name": "Oxford",

      "address": "Oxfordshire"

    },

    "grades": [

      {

        "courseName": "history",

        "grade": 78,

        "pass": true

      },

      {

        "courseName": "literature",

        "grade": 85,

        "pass": true

      }

    ],

    "isFired": false

  },

  {

    "firstName": "David",

    "lastName": "Williams",

    "age": 25,

    "grades": [

      {

        "courseName": "chemistry",

        "grade": 90,

        "pass": true

      },

      {

        "courseName": "economics",

        "grade": 82,

        "pass": true

      }

    ],

    "isFired": false

  },

  {

    "firstName": "Ahmed",

    "lastName": "Williams",

    "age": 25,

    "faculty": {

      "name": "Stanford",

      "address": "Stanford"

    },

    "grades": [

      {

        "courseName": "chemistry",

        "grade": 90,

        "pass": true

      },

      {

        "courseName": "economics",

        "grade": 82,

        "pass": true

      }

    ],

    "isFired": false

  }

]);

  //4.



  

db.student.find({})

db.student.find({"firstName":"Ahmed"})

db.student.find({$or: [{"firstName":"Ahmed"},{"lastName":"Ahmed"}]})

db.student.find({"firstName":{$ne:"Ahmed"}})

db.student.find({$and:

    [

    {"age":{$gte: 21}},

    {
      "faculty":{$exists: true}
    },

    ]})

    

db.student.find({"firstName":"Ahmed"},

                {"firstName":1,"lastName":1,"isFired":1,"_id":0})



db.student.updateMany({"firstName":"Ahmed"},

                {

                    $set:

                    {"lastName":"Mo"}

                })

                

db.student.deleteMany({"isFired": true})



db.student.deleteMany({})



db.dropDatabase()



