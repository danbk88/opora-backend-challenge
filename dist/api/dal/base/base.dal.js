"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDAL = void 0;
const mysql = __importStar(require("mysql"));
let pool = mysql.createPool({
    connectionLimit: 20,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB_NAME,
});
class BaseDAL {
    // protected abstract mapResult(res: any);
    getSPQuery(sp) {
        const query = `CALL ${sp.name}(${sp.args})`;
        return query;
    }
    async accessDB(procedure, mapper) {
        const query = this.getSPQuery(procedure);
        // Query DB:
        const res = await this.queryDB(query);
        const mapped = mapper(res);
        return mapped;
    }
    async queryDB(query) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    // not connected!
                    return reject(err);
                }
                // Use the connection
                connection.query(query, function (error, results, fields) {
                    // When done with the connection, release it.
                    connection.release();
                    // Handle error after the release.
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(results);
                    }
                });
            });
        });
    }
}
exports.BaseDAL = BaseDAL;
