const express = require('express')
const cors = require('cors')


const server = express();

server.use(express.json())

server.use(cors({origin: ['https://five0fin-frontend.onrender.com','http://localhost:3000']}))

const dataService = require('./services/dataService')

server.listen(8000,()=>{
    console.log('server 8000 started')
}
)


server.get('/getData',(req,res)=>{
    dataService.getData().then((result)=>{
        res.status(result.statusCode).json(result)

    })
})

server.post('/newData',(req,res)=>{
    dataService.newData(req.body.id,req.body.name,req.body.mail,req.body.phn,req.body.zip).then((result)=>{
        res.status(result.statusCode).json(result)

    })
})

