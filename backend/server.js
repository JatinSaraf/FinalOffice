const app = require("./app");
const http = require('http')
const connectDatabase = require("./db/Database");
const PORT =8000;

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// connect db
connectDatabase();

// create server
// const server = app.listen(process.env.PORT, () => {
//   console.log(
//     `Server is running on http://localhost:${process.env.PORT}`
//   );
// });

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
});

server.listen(PORT, (err) => {

    console.log(`Server is running on http://localhost:${PORT}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});