Key issues:

Environment mismatch: db.js expects DB_DATABASE, DB_HOST, DB_PORT, DB_USER, and DB_PASSWORD (lines 6‑14) but docker-compose.yml only sets DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME, so the containerized backend has no value for DB_DATABASE/DB_PORT and cannot authenticate.

Seed script vs. schema: poolGames is defined with (gameId, playerId, shotAtt, shotPot, errors, effSafety, opponentId) in schema.sql lines 30‑38, yet seed.sql inserts into (matchPlayers, shotAtt, shotPot, errors, effSafety, opponentId) on lines 25‑32, so running the seeds will fail because matchPlayers does not exist.

Unused/empty backend pieces: postPool is an empty controller (postPool.js:1‑3) and no router exposes it, so any future pool POST flow has no handler yet; likewise, no route registers express.json() so even existing endpoints can only serve GETs with canned data.

Front-end forms and match views are placeholders: the MMA form binds action={handleSubmit} where handleSubmit is an empty object (page.jsx:3‑45), and the pool form’s handleSubmit returns a parsed object but is wired directly to onSubmit without event.preventDefault() or a backend request (page.jsx:5‑69); the match pages fetch data but just stringified results (page.jsx:11‑34, page.jsx:10‑34), so there is no meaningful data flow yet.

Next steps:

Align environment handling: add .env with DB_DATABASE, DB_PORT, etc., or update db.js to use the same variable names that docker-compose.yml defines, and wire express.json() so you can accept POST payloads. ✅

Implement real data paths: connect Sequelize to the tables (poolPlayers, poolGames, mmaMatches), replace the stub controllers with queries, and expand the routers (e.g., add POST /players that uses postPool).

Finish the frontend data flow: make the forms actually collect/evaluate data (preventDefault, FormData, backend fetch), render backend responses (not raw JSON strings), and replace static cards with dynamic data fetched from the API.

tldr:
db is not config and has no functionality. Goal is implement a clear schema and crud func to allow testing to be implemented.

