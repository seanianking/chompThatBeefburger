//Pulls needed modules
const express = require("express");

//Middleware
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("/public"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

//Sets handlebars up to be used
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);

//Starts the app
app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
})