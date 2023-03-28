import express from 'express'
import * as pg from 'pg' // remove (til database)
import apiEndpoints from './public/js/apiEndpoints.mjs';
import encryptionAPIRoute from './routes/encryptionAPI.mjs';
import userAPIRoute from './routes/userAPI.mjs'
import Dictionary from './public/Dictionary.mjs';

const {API_ENDPOINTS, USER_ENDPOINT}  = apiEndpoints;

const server = express();
const port = (process.env.PORT || 8080);
server.use(express.json()) // remove (til database)

const {Client} = pg.default; // remove (til database)

console.log("Port set to", port);

server.set('port', port);
server.use(express.static('public'));

server.use((req,res,next)=>{
    console.log(req.url);
    next();
})

server.use(express.json());

server.use(API_ENDPOINTS.base,encryptionAPIRoute);
server.use("/user",userAPIRoute);


server.listen(server.get('port'), function () {
console.log('server running', server.get('port'));
});

