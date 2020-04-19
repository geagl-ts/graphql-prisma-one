const server = require("./server");

server.start({ port: 4000 }, ({ port }) => {
    console.log("Server on " + port);
});
