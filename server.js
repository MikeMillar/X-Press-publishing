const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');

// Database
const db = newsqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

// Middleware
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const morgan = require('morgan');
app.use(morgan('dev'));
