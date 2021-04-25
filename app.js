const express = require('express');
const path = require('path')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/deti.html');
});
app.get('/vedouci', (req, res) => {
    res.sendFile(__dirname + '/public/vedouci.html');
});

io.on('connection', (socket) => {
    //socket.broadcast.emit('connected user', {userId : socket.id, text: ""});
    console.log('connected user "' + socket.id + '" no action happening');
    
    socket.on('prihlasit dite', (msg) => {
        io.emit('prihlasit dite', msg);
        console.log('prihlasit dite: ' + msg);
    });

    socket.on('zprava vedouciho', (msg) => {
        io.emit('zprava vedouciho', msg);
        console.log('zprava vedouciho: ' + msg);
    });

    socket.on('nova sekce', (msg) => {
        io.emit('nova sekce', msg);
        console.log('nova sekce: ' + msg);
    });

    socket.on('nova otazka', (msg) => {
        io.emit('nova otazka', msg);
        console.log('nova otazka: ' + msg);
    });
    
    socket.on('disconnect', () => {
        io.emit('user disconnected', socket.id);
        console.log('user disconnected ' + socket.id);
      });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});


