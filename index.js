import express from "express";
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
 
const app = express();

const PORT = 4100;

//mongoose connections (connecting mongo and the API)
mongoose.Promise = global.Promise; //we will be waiting for a result when we connect to mongodb. Below is the connection that we want to create. 
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//create our bodyParser setup(or connection). Allowing bodyparse to parse the request that will come in in a way that the API can read.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

routes(app);
//serving static files (images in this case)
app.use(express.static('public')) //passing the folders name in the func

app.get('/', (req, res) =>
    res.send(`THis shit is boring port ${PORT}`)
);
app.listen(PORT, (req, res) =>
    console.log(`You are screwing around too much on port ${PORT}`)
);

//got our server running, applause! Next setting up the folder structure for the project, and "branch out controllers, models, and routes"