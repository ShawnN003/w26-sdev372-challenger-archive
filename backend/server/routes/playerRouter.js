import express from 'express'
import { playerController, postPoolMatch } from '../controllers/playerController.js'
import { calcOddsPool } from '../controllers/calcOddsPool.js';

const router = express.Router();

router.get("/", playerController);
router.post("/", postPoolMatch);
router.get("/odds", calcOddsPool);

export default router;