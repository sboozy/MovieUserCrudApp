--connect to database
-- take connect db out for Heroku deployment
-- \c movie_db

INSERT INTO movie (title, director, release_year, description, img_url)
VALUES
('Braveheart','Mel Gibson', 1995, 'Enraged at the slaughter', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/2qAgGeYdLjelOEqjW9FYvPHpplC.jpg'),
('Lion King', 'Roger Allers, Rob Minkoff', 1994, 'A Lion cub prince', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg'),
('The Shawshank Redemption', 'Frank Darabont', 1994, 'Framed in the 1940s', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg'),
('Dirty Dancing', 'Emile Ardolino', 1987, 'Expecting the usual tedium', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jFoktPxTtabZfh9JeDy3F78g9w7.jpg'),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'A burger-loving hit man,', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dM2w364MScsjFf8pfMbaWUcWrR.jpg'),
('Django Unchained', 'Quentin Tarantino', 2012, 'a German bounty hunter', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5WJnxuw41sddupf8cwOxYftuvJG.jpg'),
('Kill Bill: Vol. 1', 'Quentin Tarantino', 2003, 'An assassin is shot', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/97fNAi62HawGjWru7PvVmF7RAbU.jpg');

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
