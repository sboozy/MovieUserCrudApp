--connect to database
\c movie_db

INSERT INTO movie (title, director, release_year, description)
VALUES
('Braveheart','Mel Gibson', 1995, 'Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord''s soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.'),
('Lion King', 'Roger Allers, Rob Minkoff', 1994, 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father''s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.'),
('The Shawshank Redemption', 'Frank Darabont', 1994, 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'),
('Dirty Dancing', 'Emile Ardolino', 1987, 'Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances ''Baby'' Houseman is surprised to find herself stepping into the shoes of a professional hoofer – and unexpectedly falling in love.'),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'A burger-loving hit man, his philosophical partner, a drug-addled gangster''s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.'),
('Django Unchained', 'Quentin Tarantino', 2012, 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.'),
('Kill Bill: Vol. 1', 'Quentin Tarantino', 2003, 'An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle – but ''The Bride'' lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.');

INSERT INTO genre (genre_type)
VALUES
('Drama'),
('Action'),
('Family'),
('Animation'),
('Crime'),
('Music'),
('Romance'),
('Thriller'),
('Western');

INSERT INTO movie_genre (movie_id, genre_id)
VALUES
(1,1),
(1,2),
(2,1),
(2,3),
(2,4),
(3,1),
(3,5),
(4,1),
(4,6),
(4,7),
(5,8),
(5,5),
(6,1),
(6,9),
(7,2),
(7,5);
