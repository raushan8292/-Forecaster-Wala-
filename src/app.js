const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');


// public static path
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set("views", templates_path)
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("/", (req, res) => {
 res.render("index");      
});
app.get("/about", (req, res) => {
    res.render("about");      
   });
   app.get("/weather", (req, res) => {
    res.render("weather");      
   });
   app.get("*", (req, res) => {
    res.render("404error", {
        errorMessage: "Opps! page not found"
    });     
   });

app.listen(port, () => {
 
    console.log(`Listening the port ${port} by the useing express`);
});