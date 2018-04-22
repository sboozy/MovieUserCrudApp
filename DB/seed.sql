--connect to database
\c movie_db

INSERT INTO movie (title, director, release_year, description)
VALUES
('Braveheart','Mel Gibson', 1995, 'Enraged at the slaughter '),
('Lion King', 'Roger Allers, Rob Minkoff', 1994, 'A Lion cub prince'),
('The Shawshank Redemption', 'Frank Darabont', 1994, 'Framed in the 1940s '),
('Dirty Dancing', 'Emile Ardolino', 1987, 'Expecting the usual tedium '),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'A burger-loving hit man, '),
('Django Unchained', 'Quentin Tarantino', 2012, 'a German bounty hunter'),
('Kill Bill: Vol. 1', 'Quentin Tarantino', 2003, 'An assassin is shot ');

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
