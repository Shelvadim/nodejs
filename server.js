import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res)=>{
    res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, ()=>{
    console.info('Listening on port', config.port);
});

//const server = http.createServer( (req, res) =>{
 //res.write('Hello HTTP!111\n');
 //setTimeout(()=>{
 //    res.write('I can stream!\n');
   //  res.end();
 //}, 3000);
//});

//console.log(config, nodeEnv);