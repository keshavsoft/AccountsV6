import express from 'express';
import { getFunc } from "./ShowAll/controller.js";
import { getFunc as Distinct } from "./Distinct/controller.js";

const tableName = "journals";

const router = express.Router();
router.get('/ShowAll', (req, res) => getFunc({ res, inTableName: tableName }));
router.get('/Distinct', (req, res) => Distinct({ res, inTableName: tableName }));

export { router };