const express = require('express');
const app = express();

const buildingDataBase = require('./infra/database/building-modeling-structure');
buildingDataBase.sequelize.sync();

app.listen(3001, ()=> console.log("Server working on port 3001"));