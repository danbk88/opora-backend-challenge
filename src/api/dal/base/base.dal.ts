import * as mysql from 'mysql';

let pool = mysql.createPool({
    connectionLimit: 20,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB_NAME,
});

export abstract class BaseDAL {
    // protected abstract mapResult(res: any);

    private getSPQuery(sp: any) {
        const query:string = `CALL ${sp.name}(${sp.args})`;

        return query;
    }

    protected async accessDB(procedure: any, mapper: any){
        const query = this.getSPQuery(procedure);
        // Query DB:
        const res = await this.queryDB(query);
        const mapped = mapper(res);

        return mapped;
    }
    
    private async queryDB(query: string) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err){
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
        })
    }
}