"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var port = 3000;
app.use(morgan_1.default('combined'));
app.use('/api', routes_1.default);
app.get('/', function (req, res) {
    res.send('main :)');
});
app.listen(port, function () {
    console.log("Application is running on port " + port);
});
