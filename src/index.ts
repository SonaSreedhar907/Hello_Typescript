const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('server running on port 8080');
});

const MONGO_URL = 'mongodb+srv://sona:sona@typescript-project.9v0d1ce.mongodb.net/?retryWrites=true&w=majority&appName=typescript-project';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

mongoose.connection.on('error', (error) => console.log(error));
