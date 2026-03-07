import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()

import mmaRouter from './routes/mmaRouter.js'
import poolRouter from './routes/poolRouter.js'

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/mma", mmaRouter);
app.use("/pool", poolRouter);

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://www.thesportsdb.com/api/v2/examples/all_sports.json", {
      headers: {
        Accept: "application/JSON",
      },
    });

    if (!response.ok) {
      throw new Error(`Remote API responded with ${response.status}`);
    }

    const dataFromMyJSON = await response.json();
    const sportEntry = dataFromMyJSON?.all?.[2];
    const sportPicEntry = dataFromMyJSON?.all?.[3];

    console.log(sportEntry?.strSport);
    return res.json({
      sport: sportEntry?.strSport ?? 'Unknown',
      sportPic: sportPicEntry?.strSportThumb ?? null,
    });
  } catch (error) {
    console.error('Failed to fetch sports metadata:', error);
    return res.status(502).json({
      error: 'Unable to fetch sports metadata at this time.',
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
