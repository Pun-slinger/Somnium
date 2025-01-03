const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const routes = require("./controller/routes");
const races_routes = require("./controller/races-routes");
const origins_routes = require("./controller/origins-routes");
const subclasses_routes = require("./controller/subclasses-routes");
const patrons_routes = require("./controller/patrons-routes");
const divinity_routes = require("./controller/divinity-routes");

const origins_aprana_routes = require("./controller/origins/origins-aprana-routes");
const origins_clivania_routes = require("./controller/origins/origins-clivania-routes");    
const origins_dreavan_routes = require("./controller/origins/origins-dreavan-routes");
const origins_ewhil_routes = require("./controller/origins/origins-ewhil-routes");
const origins_fruaqua_routes = require("./controller/origins/origins-fruaqua-routes");
const origins_ofrye_routes = require("./controller/origins/origins-ofrye-routes");
const origins_pandora_routes = require("./controller/origins/origins-pandora-routes");
const origins_ocean_routes = require("./controller/origins/origins-ocean-routes");

const divinity_radiance_routes = require("./controller/divinity/divinity-radiance-routes");
const divinity_shroud_routes = require("./controller/divinity/divinity-shroud-routes");
const divinity_masked_routes = require("./controller/divinity/divinity-masked-routes");
const divinity_prismatic_routes = require("./controller/divinity/divinity-prismatic-routes");
const divinity_grey_routes = require("./controller/divinity/divinity-grey-routes");

//tell server how to handle html files using handlebars
app.engine('.handlebars', exphbs.engine({ defaultLayout: 'main',extname: '.handlebars' }));
app.set('view engine', '.handlebars');

var hbs = exphbs.create({});
// register new function
hbs.handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj);
})

app.use(express.static("static"));

app.use("/", routes);
app.use("/races", races_routes);
app.use("/origins", origins_routes);
app.use("/subclasses", subclasses_routes);
app.use("/patrons", patrons_routes);
app.use("/divinity", divinity_routes);

app.use("/origins/Aprana", origins_aprana_routes);
app.use("/origins/Clivania", origins_clivania_routes);
app.use("/origins/Dreavan", origins_dreavan_routes);
app.use("/origins/Ewhil", origins_ewhil_routes);
app.use("/origins/Fruaqua", origins_fruaqua_routes);
app.use("/origins/Ofrye", origins_ofrye_routes);
app.use("/origins/Pandora", origins_pandora_routes);
app.use("/origins/The-Boundless-Ocean", origins_ocean_routes);

app.use("/divinity/Radiance-pantheon", divinity_radiance_routes);
app.use("/divinity/Shroud-pantheon", divinity_shroud_routes);
app.use("/divinity/Masked-pantheon", divinity_masked_routes);
app.use("/divinity/Prismatic-pantheon", divinity_prismatic_routes);
app.use("/divinity/Grey-pantheon", divinity_grey_routes);

app.use(/*missing route*/(req, res) => {    //use as a catch all routes
    res.status(404).send("<h3 style='color:red'>Page Not Found</h3>");
});

//this function is called after server start listening for request
const HTTP_PORT = process.env.PORT || 8080  ;
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);