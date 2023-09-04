# FULL STACK TO-DO APP.

## Description

duration:3 days.
it took me 3 days to complete this project.
I first set up all the required files for this project. I made a server folder, it has 3 folder inside it. The public folder is where our client.js,index.html, and style.css files are. Routes folder has my toDo route and modules has my pool.js file in it. I also have a server.js file and a database.sql file.
the project had specific components which were to
[]Create a front end experience that allows a user to create a Task.
[x]When the Task is created, it should be stored inside of a database (SQL)
[x]Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
[x]Each Task should have an option to 'Complete' or 'Delete'.
[x] When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
[x] Whether or not a Task is complete should also be stored in the database.
[x]Deleting a Task should remove it both from the front end as well as the Database.
I first set up my database in postico 2. I copy and pasted the sql code and can be found under "database.sql".
I created my routes on the server side. the routes were GET,POST,PUT, and DELETE. I tested my routes in Postman to make sure they were working.After that, I set up my ajax requests and once those were working, I costumized the page using css and bootstrap. If you would like a more detailed explanation, I left comments on my code.

## SCREENSHOT

<img width="1380" alt="toDoList#1" src="https://github.com/MusCodes/public-Movie-Saga/assets/108280009/11c9a4fe-0959-420a-9a88-e463f2ddbdae">


## prerequisites

Node.js
Express
Pg

## INSTALLATION

Create a dataBase using postico and copy and past the info I have in database.sql.

after you download the packages above. open the project in your VScode and open your terminal and type "npm start server".

## USAGE

User can input a task and decide weather its completed or not, after the user hits submit, it will add their task on a table below. User is able to delete the task and press the "checkmark" once complete.

## Built with

javascript,html,node.js,express,postico.

## Ackowledgement

Thanks to Emerging Digital Academy for helping me gain the necessary knowledge to be able to built this. Special shoutout to Blaine and Mason!

## SUPPORT

if you experience any bugs/issues. please email me at MusCodes7@gmail.com

