import express from 'express'
import { matchesController } from '../controllers/matchesController.js'
import { calcOddsMma } from '../controllers/calcOddsMma.js';

const router = express.Router();

export default () => {
    router.get("/", matchesController);
    router.get("/oddsMma", calcOddsMma);
    return router;
};

  