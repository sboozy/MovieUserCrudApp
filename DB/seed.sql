--connect to database
-- take connect db out for Heroku deployment
-- \c movie_db

INSERT INTO movie (title, director, release_year, description, img_url)
VALUES
('Braveheart','Mel Gibson', 1995, 'Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord''s soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/2qAgGeYdLjelOEqjW9FYvPHpplC.jpg'),
('Lion King', 'Roger Allers, Rob Minkoff', 1994, 'A young lion cub named Simba can''t wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg'),
('The Shawshank Redemption', 'Frank Darabont', 1994, 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg'),
('Dirty Dancing', 'Emile Ardolino', 1987, 'Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances ''Baby'' Houseman is surprised to find herself stepping into the shoes of a professional hoofer – and unexpectedly falling in love.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jFoktPxTtabZfh9JeDy3F78g9w7.jpg'),
('Pulp Fiction', 'Quentin Tarantino', 1994, 'A burger-loving hit man, his philosophical partner, a drug-addled gangster''s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dM2w364MScsjFf8pfMbaWUcWrR.jpg'),
('Django Unchained', 'Quentin Tarantino', 2012, 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5WJnxuw41sddupf8cwOxYftuvJG.jpg'),
('Kill Bill: Vol. 1', 'Quentin Tarantino', 2003, 'An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle – but ''The Bride'' lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/97fNAi62HawGjWru7PvVmF7RAbU.jpg'),
('Honey, I Shrunk the Kids', 'Joe Johnston', 1989, 'The scientist father of a teenage girl and boy accidentally shrinks his and two other neighborhood teens to the size of insects. Now the teens must fight diminutive dangers as the father searches for them.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/f5eFxKYAd7hN1BxYzBg9qL1SDRe.jpg'),
('Bridge of Spies', 'Steven Spielberg', 2015, 'During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers'' only hope is New York lawyer James Donovan, recruited by a CIA operative to negotiate his release. Donovan boards a plane to Berlin, hoping to win the young man''s freedom through a prisoner exchange. If all goes well, the Russians would get Rudolf Abel, the convicted spy who Donovan defended in court.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xPCNA8zJxyyFKTj47QpvkXHukzB.jpg'),
('Forrest Gump', 'Robert Zemeckis', 1994, 'A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. ''Forrest Gump'' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg'),
('Good Will Hunting', 'Gus Van Sant', 1997, 'Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jq8LjngZ7XZEQge5JFTdOGMrHyZ.jpg');

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
('Western'),
('Comedy');

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
(7,5),
(8,3),
(8,10),
(9,1),
(10,10),
(10,1),
(10,7),
(11,1);

