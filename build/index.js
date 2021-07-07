"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import logger from './'
var app = express_1.default();
var port = 3000;
app.get('/', function (req, res) {
    res.send('running :)');
});
app.listen(port, function () {
    console.log("Application is running on port " + port);
});
