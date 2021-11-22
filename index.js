/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

let userLetter = prompt(`Enter the letter`)

let listAllUsersName = users.filter(function (user) {
    return user.name.includes(userLetter)
}).map(function (user) {
    return user.name
})

for (userName of listAllUsersName) {
    console.log(`Hi, ${userName}`)
}

function sayHi(){
    return (`Hi, ${listAllUsersName}`)
}

let userIdInput = Number(prompt("Enter the user Id"))

let listOfIncompletedTodos = todos.filter(function(todo) {
    return todo.userId === userIdInput 
}).filter(function (todo) {
    if (todo.completed) return false
    return true
}).map(function (todo) {
    return todo.title 
})

function printIncompletedTodos () {
    for (incompletedTodo of listOfIncompletedTodos)
    console.log(`To do: ${incompletedTodo}\n`)
}

printIncompletedTodos()

// Chellange
let userInputEmail = prompt("Enter 'email' to see a list of users name and emails")

let nameAndEmail = users.filter(function(user) {
    return 'email' === userInputEmail 
}).map(function (user) {
    console.log( `${user.name} - ${user.email}`)
})
