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
app.post("/register", (req, res) => {
  const name = req.body.myname;
  const age = req.body.age;
  const clas = req.body.clas;
  const number = req.body.number;
  const email = req.body.email;
  const addr = req.body.address;
  const dob = req.body.dob;
  console.log(
    `Name: ${name} \nAge: ${age} \nClass: ${clas} \nNumber: ${number} \nEmail: ${email}\nAddress: ${addr}\nDate_of_Birth: ${dob}`
  );
  res
    .status(201)
    .send(
      `Name: ${name} <br />Age: ${age} <br />Class: ${clas} <br />Number: ${number} <br />Email: ${email}<br />Address: ${addr}<br />Date_of_Birth: ${dob}`
    );
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
