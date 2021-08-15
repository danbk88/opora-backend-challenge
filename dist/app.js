"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const routes_1 = __importDefault(require("./api/routes/routes"));
const app = express_1.default();
const port = process.env.PORT;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(routes_1.default);
app.listen(port, () => console.log(`Super-Metrics app listening at http://localhost:${port}`));
exports.default = app;
