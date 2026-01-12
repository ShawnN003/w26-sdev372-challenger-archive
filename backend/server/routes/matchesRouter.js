import express from 'express'
import { matchesController } from '../controllers/matchesController.js'

const router = express.Router();

export default () => {
    router.get("/matches", matchesController);
    return router;
};

  