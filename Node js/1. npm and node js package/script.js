// to initialize an npm project we write "npm init"
// console.log("hello")

// to initialize an npm project with pre loaded info we write "npm init -y"
// after this "node_modules" folder is create where all modules installed will be there
// but it is a folder with n number of files we don't need them to uploaded to github or any drive
// so we delete it and upload the folder/files, if someone wants to get the files just do "npm install", 
// and this installs all required files

//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Abhishek Shukla</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
        name: "Shyam",
        age: "26",
    },
    {
        name: "Navjot",
        age: "21",
    },
    {
        name: "Vitthal",
        age: "23",
    },
];
var document = {
    html: html,
    data: {
        users: users,
    },
    path: "./output.pdf",
    type: "",
};
// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

pdf
    .create(document, options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });