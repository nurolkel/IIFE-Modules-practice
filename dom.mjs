import getUsers from "./users.mjs";

function addUserToDom(name) {
    const node = document.createElement("li");
    const text = document.createTextNode(name);

    node.appendChild(text);

    document.getElementById("users").appendChild(node);
}

document.getElementById("submit").addEventListener('click', function() {
    let input = document.getElementById('input');
    addUserToDom(input.value);

    input.value = "";
})

let usersList = getUsers();

for (let i = 0; i < usersList.length; i++) {
    addUserToDom(usersList[i]);
}


 

