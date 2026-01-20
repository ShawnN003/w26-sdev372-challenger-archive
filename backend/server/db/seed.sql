INSERT INTO poolPlayers (firstName, lastName, win, loss) VALUES
('Earl', 'Strickland', 25, 10),
('Shane', 'VanBoening', 32, 6),
('Efren', 'Reyes', 40, 12),
('Jayson', 'Shaw', 28, 14),
('Joshua', 'Filler', 30, 9);


INSERT INTO mmaFighters (firstName, lastName) VALUES
('Jon', 'Jones'),
('Israel', 'Adesanya'),
('Alex', 'Pereira'),
('Max', 'Holloway'),
('Conor', 'McGregor');

INSERT INTO mmaMatches
(matchFighters, headHits, bodyHits, dodges, blocks, notes, opponentId)
VALUES
('Jon Jones vs Israel Adesanya', 45, 22, 18, 12, 'Title fight, dominant grappling', 1),
('Alex Pereira vs Max Holloway', 38, 19, 21, 14, 'High striking volume', 3),
('Conor McGregor vs Max Holloway', 31, 17, 16, 9, 'Fast-paced stand-up fight', 5),
('Israel Adesanya vs Alex Pereira', 42, 20, 23, 11, 'Technical kickboxing match', 2),
('Jon Jones vs Conor McGregor', 50, 28, 14, 15, 'Championship superfight', 1);

INSERT INTO poolGames
(matchPlayers, shotAtt, shotPot, errors, effSafety, opponentId)
VALUES
('Shane VanBoening vs Earl Strickland', 78, 56, 4, 9, 2),
('Efren Reyes vs Jayson Shaw', 82, 60, 3, 11, 3),
('Joshua Filler vs Shane VanBoening', 75, 54, 5, 8, 5),
('Earl Strickland vs Efren Reyes', 80, 58, 2, 12, 1),
('Jayson Shaw vs Joshua Filler', 77, 55, 6, 7, 4);
