'use stric';

const express = require('express');

const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API Up",
        version: "0.0.2"
    });
});
app.use('/', route);

module.exports = app;