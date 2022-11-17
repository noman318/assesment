console.log("Self_Assesment_1");

const express = require("express");
const fs = require("fs");
const port = 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //   res.send("Creating_a_Student_info");
  res.sendFile(__dirname + "/index.html");
});
// app.post("/register", (req, res) => {
//   const name = req.body.myname;
//   const age = req.body.age;
//   const clas = req.body.clas;
//   const number = req.body.number;
//   const email = req.body.email;
//   const addr = req.body.address;
//   const dob = req.body.dob;
app.post("/register", (req, res) => {
  const studData = {
    naam: req.body.naam,
    age: req.body.age,
    clas: req.body.clas,
    number: req.body.number,
    email: req.body.email,
    addr: req.body.addr,
    dob: req.body.dob,
  };
  // console.log(
  //   `Name: ${naam} \nAge: ${age} \nClass: ${clas} \nNumber: ${number} \nEmail: ${email}\nAddress: ${addr}\nDate_of_Birth: ${dob}`
  // );
  console.log(studData);
  fs.appendFile(
    "student.txt",
    `Name: ${req.body.naam}  Age: ${req.body.age}  Class: ${req.body.clas}  Number: ${req.body.number}  Email: ${req.body.email}  Address: ${req.body.addr}  Date_of_Birth: ${req.body.dob}\n`,
    studData,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res
    .status(201)
    .send(
      `Name: ${studData.naam} <br />Age: ${studData.age} <br />Class: ${studData.clas} <br />Number: ${studData.number} <br />Email: ${studData.email}<br />Address: ${studData.addr}<br />Date_of_Birth: ${studData.dob}`
    );
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
