let clients = require('./clients.json')

for (var i = 0; i < clients.length; i++) {
  if (clients[i].rep_name.toUpperCase().includes(process.argv[2].toUpperCase())) {
    console.log(
      "id:", clients[i].id,
      "name:", clients[i].rep_name
    )
  }
}
