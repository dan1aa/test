const express = require('express')
const exhbs = require("express-handlebars");
const Handlebars = require("handlebars");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const path = require('path')
const PORT = process.env.PORT || 3000;

let app = express();

const mainRoute = require('./routes/main')
const searchRoute = require('./routes/search')
const errorRoute = require('./routes/error')

const hbs = exhbs.create({
    defaultLayout: "mainLayout",
    extname: "hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");


app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoute)
app.use(searchRoute)
app.use(errorRoute)


app.listen(PORT, () => {
    console.log('server stared')
})
