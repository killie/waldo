import Person from "./../person/Person";

const express = require('express');
const app = express();
const port = 3001;

const people: Person[] = [];
people.push({
    id: "1",
    firstName: "Robert",
    middleName: "",
    lastName: "Mitchum",
    phone: "",
    eMail: "mitch@outlook.com",
});
people.push({
    id: "2",
    firstName: "John",
    middleName: "Paul",
    lastName: "Jones",
    phone: "123-231",
    eMail: ""
});

app.get("/hello", (req: any, res: any) => {
    res.send({greeting: "Well hello"});
});

app.get("/people", (req: any, res: any) => {
    res.send({people: people});
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log("Listening on port " + port);
});

export {};