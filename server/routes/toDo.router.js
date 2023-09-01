const { error } = require("console");
const { response } = require("express");
const express = require("express");
const taskRouter = express.Router();
//DB CONNECTION
const pool = require("../modules/pool");

module.exports = taskRouter;

// GET

taskRouter.get("/", function (req, res) {
  // setting up our router using the get method, the url is / because in the server side we already set up a app,use/tasks. made a function with 2 params
  const task = `SELECT * FROM "toDoTable" ORDER BY "complete";`; // we made a variable and set its value to our sql code that will display our toDoTable list
  pool
    .query(task)
    .then((results) => {
      // our pool is our way to connect to the data base, query method will request information to the data base and were passing the variable we made earlier with the variable set to the sql code
      // were returning a promise that gives us the results of the query, and were using .catch incase the request doesn't go through, it will send back a 500.
      console.log("in the data base");
      res.send(results.rows);
    })
    .catch((error) => {
      console.log("we did not make it in the data base", error);
      res.sendStatus(500);
    });
});

//Post
taskRouter.post("/", (req, res) => {
  // this is our post which will allow us to add data to our database. require and response is our two params
  const { task,  } = req.body; // this is a way to set our keys to our req.body. this is the same as const task= req.body; const complete=req.body.
  let queryText = `INSERT INTO "toDoTable" ("task") 
    VALUES ($1);`; // this is our query text which has the sql code that will insert in our table, we set the values to $1 and $2 because this way, we will avoid sql injections.
  pool
    .query(queryText, [task])
    .then((response) => {
      //. were calling our queryText and an array with our task and complete that will take the place of $1, and $2.
      console.log("inserted into table"); // were console logging, this isn't required but it's good practice to know where something went wrong or right, and were sending back a 201 status which is means success.
      res.sendStatus(201);
    })
    .catch((error) => {
      // if .then promise doesn't go through, it will return a 501 error with our console logged message.
      console.log(`we didn't insert into the table`, error);
      res.sendStatus(501);
    });
});

// PUT
// set up our put router, this router is updating the id we give it to, and our sql code is inside the queryText variable. "NOT" is the same as ! in javascript, it just flips it to the oppsite of what it is. Were passing our queryText variable and our id in the pool
taskRouter.put("/:id", (req, res) => {
  queryText = `UPDATE "toDoTable" SET "complete"=NOT "complete" WHERE id=$1`;
  pool.query(queryText, [req.params.id]).then(() => {
    res.sendStatus(200);
  });
});

/// DELETE

taskRouter.delete("/:id", (req, res) => {
  // this is our delete route, the url is unique because it we need to specify which id. and as usual, it takes a two params (req,res).
  const taskDelete = req.params.id; // delete is different than other routes because it doesn't take a body but a param. we made a variable and set it to the param of id.
  console.log(taskDelete); // console logging our variable we made earlier for good practice.
  const queryText = `DELETE FROM "toDoTable" WHERE "id"= $1;`; // made a variable with our sql code in it, its deleting from out "ToDoTable" and at the specific id. Id is set to $1  because this way prevent sql injection attacks.
  pool
    .query(queryText, [taskDelete])
    .then(
      (
        response // this is our query and inside it is our sql code and array with our variable we made earlier.
      ) => {
        res.sendStatus(204);
      }
    )
    .catch((error) => {
      // if our .then doesn't go through it will return an error instead.
      console.log("failed to delete :(", error);
      res.sendStatus(204);
    });
});
