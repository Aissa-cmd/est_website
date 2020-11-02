// Require Needed Ressources
const express = require("express")
const routes = require("./routes/routes")

// Init Express
const app = express()

// Set View Engine -- pug --
app.set("view engine", "pug")

// Set Common Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Include Libraries From Node Modules
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist")
)
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"))

// Include Routes
app.use("/", routes)

// Run The App Locally on Port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Listenning on port ${PORT} => http://localhost:5000`)
)