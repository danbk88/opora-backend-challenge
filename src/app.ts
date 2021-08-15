import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import routes from './api/routes/routes';


const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => console.log(`Super-Metrics app listening at http://localhost:${port}`));

export default app; 
