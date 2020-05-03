require('dotenv').config();

const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect(
	process.env.MONGO_CONNECT,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.Router());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3000);