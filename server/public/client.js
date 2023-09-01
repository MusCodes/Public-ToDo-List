$(function () {
  getTable();

  console.log("im working");
  $("#submit").on("click", addinputs);
  $("#displayTasks").on("click", "#delete", deleteTable);
  $("#displayTasks").on("click", "#complete", completeOrNot);
});

// our submit function
function addinputs() {
  // this function will be one of our click handlers, we set a an empty object, and attached our two keys to it. we are setting the two keys to the values we grab from our two inputs. were using the id of the inputs to grab it. Then, we are our post function and passing the object as a parameter.
  tableArray = {};
  tableArray.task = $("#taskInput").val();
  tableArray.complete = $("#complete").val();
  postTable(tableArray);
  $("#taskInput").val("");
$("#complete").val("");
}
// GET
// this will get our table from the data base.
function getTable() {
  // made a function and inside its body is our ajax request that will get our table and im calling the function after it to console log it to make sure its working.
  $.ajax({
    method: "GET",
    url: "/tasks",
  })
    .then(function (response) {
      console.log(`this is our table`, response);
      loopTable(response);
    })
    .catch(function (error) {
      console.log("error with add table function", error);
    });
}

function loopTable(x) {
  // we have a function here with a parameter of x we are first emptying our table, looping over our param which we will pass our response inside the get function.
  $("#displayTasks").empty();
  for (let i = 0; i < x.length; i++) {
    let tableLoop = x[i];
    let className = ""; // made an empty variable, and looped over our complete key. We also have a if statement stating if complete is true, it will set className to our change color class which we will style in the style.css
    if (tableLoop.complete) {
      className = "change-Color";
    }
    // we made variable and passed our loops index in it, than we append to our table with the data we are looping over and putting it in a table data. We through a class name in our table row and put our variable className we made earlier.
    $("#displayTasks").append(`
<tr class="${className}"> 
<td> ${tableLoop.task}</td>
<td> ${tableLoop.complete ? `Yes` : `No`}</td>
<td> <button id="complete" data-id=${
      tableLoop.id
    } <i class="bi bi-check"></i></button></td>
<td> <button id="delete" data-id=${
      tableLoop.id
    } <i class="bi bi-trash-fill"></i></button><td>
</tr>`);
  }
}
// POST
function postTable(x) {
  // this is our post function, its accessing the /tasks post route we set up in our server, the x param is being saved as the data to be sent over. in postman, we set the specfic keys where x would take place but in the client side, its taking the inputs.
  $.ajax({
    method: "POST",
    url: "/tasks",
    data: x,
  })
    .then(function (response) {
      console.log("this is our post response", response);
      getTable();
    })
    .catch(function (error) {
      // if the post doesn't work than we will receive an error instead in the console log.
      console.log(`trouble with post client side`, error);
    });
}

//DELETE
function deleteTable(event) {
  //  this is our delete function, it takes one param which is event
  let id = $(event.target).data("id"); // made a variable called id and set its value using the event.target method and set it to the id, it knows which id to target because we set it in the table we are appending in the looptable function.
  console.log(id);
  $.ajax({
    // this ajax is  a deleting call, we have to specify in the url which id we want to select and delete, we are doing that by passing our id variable in the link.
    method: "DELETE",
    url: `/tasks/${id}`,
  })
    .then(function () {
      getTable(); // we are calling our get table function so after we delete, the user can see their item got deleted from the page.
    })
    .catch(function (error) {
      console.log("something went wrong in delete in the client side", error);
    });
}

//PUT

function completeOrNot(events) {
  let complete = $(events.target).data("id");
  console.log(complete);
  $.ajax({
    method: "PUT",
    url: `/tasks/${complete}`,
  })
  .then(function () {
    console.log("Put request in client.js is working");
    getTable();
  })
    .catch(function (error) {
      console.log("error in put request client.js", error);
    });
}
