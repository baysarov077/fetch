// Задача 1.1;
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Задача 1.2
fetch("https://this-site-doesnt-exists.intocode")
  .then((res) => res.json())
  .catch((error) => console.log(error));

// Задача 1.3
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(typeof(data)));

// Задача 1.4
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((count) => console.log(count.data.length));

// Задача 1.5
fetch("https://reqres.in/api/users/1")
  .then((res) => res.json())
  .then((mail) => console.log(mail.data.email));

// Задача 2.1
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ first_name: "intocode" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// Задача 2.2
let user = {
    first_name: 'intocode'
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then((res) => res.json())
.then((data) => console.log(data))


// Задача 2.3
const params = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      name: "into",
      last_name: "code",
    }),
  };
  
  fetch("https://reqres.in/api/users", params)
    .then((res) => res.json())
    .then((data) => console.log(`id: ${data.id} | created at: ${data.createdAt}`));

// Задача 2.4
fetch("https://reqres.in/api/users/5", {
  method: "DELETE",
}).then((res) =>
  res.status === 204 ? console.log("пользователь с id 5 успешно удален") : console.log("ошибка при удалении")
);

// Задача 2.5
const param = {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Интукод" }),
};

fetch("https://reqres.in/api/users/3", param)
  .then((res) => res.json())
  .then((data) => console.log(data));