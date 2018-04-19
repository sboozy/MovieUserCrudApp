--connect to database
\c movie_db

INSERT INTO movie (title, release_year, description)
VALUES
('Braveheart', 1995, 'Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord''s soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.'),
('Lion King', 1994, 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father''s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.'),
('The Shawshank Redemption', 1994, 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'),
('Dirty Dancing', 1987, 'Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances ''Baby'' Houseman is surprised to find herself stepping into the shoes of a professional hoofer – and unexpectedly falling in love.');


INSERT INTO movie_director (movie_id, dir_id)
VALUES
(1,1),
(2,2),
(2,3),
(3,4),
(4,5);

INSERT INTO director (name)
VALUES
('Mel Gibson'),
('Roger Allers'),
('Rob Minkoff'),
('Frank Darabont'),
('Emile Ardolino');

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
(4,7);

INSERT INTO genre (genre_type)
VALUES
('Drama'),
('Action'),
('Family'),
('Animation'),
('Crime'),
('Music'),
('Romance');
