const server = require("./server");

server.start({ port: process.env.PORT || 4000 }, ({ port }) => {
    console.log("Server on " + port);
});
