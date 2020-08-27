const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req, res) => {
	res.render('index')
})
server = app.listen("3000", () => console.log("Server is running..."));

const io = require("socket.io")(server);

io.on('connect', (socket) => {
    socket.on('hey', (data) => {
        io.emit('server-client', data)
      });
  });