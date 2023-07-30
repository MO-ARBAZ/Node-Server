const express = require("express");
const cors = require("cors");

const mysql = require('mysql');
// HOST: "localhost",
//     USER: "root",
//     PASSWORD: "Arbaz@123",
//     DB: "testdb",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Arbaz@123',
  database: 'testdb',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));



// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models")
db.sequelize.sync({ force: true })
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to arbaz application." });
});





require("./app/routes/tutorial.routes")(app)
// require("./app/routes/auth.routes")(app);
// set port, listen for requests
const PORT =  8808;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});