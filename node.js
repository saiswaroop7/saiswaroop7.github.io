const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
console.log(app)
console.log("Hello")

function test() {
    var str = "The best things in life are free";
    var patt = new RegExp("e");
    var res = patt.test(str);
    document.getElementById("demo").innerHTML = res;
}