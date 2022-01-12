const fs = require("fs");
const csv = require("fast-csv");
const multer = require("multer");
var arrToObj = require("array-to-object");

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/", user.create);

  // Create multiple users
  global.__basedir = __dirname;

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  function importCsvData2MySQL(filePath) {
    let stream = fs.createReadStream(filePath);
    let csvData = [];
    let csvStream = csv
      .parse()
      .on("data", function (data) {
        var keys = ["firstname", "lastname", "email"];
        var object = arrToObj(keys, data);

        User.create(object)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });

        csvData.push(data);

        console.log(object);
      })
      .on("end", function () {
        // Remove Header ROW
        csvData.shift();

        fs.unlinkSync(filePath);
      });

    stream.pipe(csvStream);
  }

  router.post("/uploadfile", upload.single("uploadfile"), (req, res) => {
    importCsvData2MySQL(__basedir + "/uploads/" + req.file.filename);
    res.json({
      msg: "File uploaded/import successfully!",
      file: req.file,
    });
  });

  // Retrieve all user
  router.get("/", user.findAll);

  app.use("/api/user", router);
};
