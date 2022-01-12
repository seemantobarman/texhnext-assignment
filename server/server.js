const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("re-sync db.");
});

// routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

require("./routes/user.routes")(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
