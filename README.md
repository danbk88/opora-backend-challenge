# backend challenge:

Instalation instructions:
Add .env file in root dir with the followed:
HOST=localhost
PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASS=
MYSQL_DB_NAME=challenge
USER_TOKEN_SECRET = asdkjnk132424-MY-SECRETT-asdasd

1. Run $ npm i
2. Run $ npm run dev


Database selection:
I chose SQL DB because of the structure of the data. the models are related to each other and the queries needed are aggregated data from multiple tables. 


Notes:
- API Documentation - While running visit http://localhost:3000/docs.
- Postman library attached in mail.
- Authorization header typed Bearer is required in all requests, all strings are valid.
