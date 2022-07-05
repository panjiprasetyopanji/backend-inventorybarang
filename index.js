require("dotenv").config();
const http = require("http");
const app = require("./src/server");
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});