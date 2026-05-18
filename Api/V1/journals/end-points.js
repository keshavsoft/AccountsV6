import express from 'express';

import { getFunc } from "./ShowAll/controller.js";
import { getFunc as Distinct } from "./Distinct/controller.js";
import { filterColumnsFunc } from "./FilterColumns/controller.js";

const tableName = "journals";

const router = express.Router();

router.post('/FilterColumns', express.json(), (req, res) => filterColumnsFunc({ req, res, inTableName: tableName }));
router.get('/ShowAll', (req, res) => getFunc({ res, inTableName: tableName }));
router.get('/Distinct', (req, res) => Distinct({ res, inTableName: tableName }));

export { router };