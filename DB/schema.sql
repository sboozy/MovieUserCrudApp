-- connect to database
\c movie_db

-- blow out any old tables with the same name
DROP TABLE IF EXISTS movie;
DROP TABLE IF EXISTS movie_director CASCADE;
DROP TABLE IF EXISTS director;
DROP TABLE IF EXISTS movie_genre CASCADE;
DROP TABLE IF EXISTS genre;

-- create new tables!

CREATE TABLE movie (
  id SERIAL PRIMARY KEY,
  title TEXT,
  release_year INT,
  description TEXT
  );

CREATE TABLE director (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
  );

CREATE TABLE movie_director (
  movie_id INT REFERENCES movie(id),
  dir_id INT REFERENCES director(id)
  );

CREATE TABLE genre (
  id SERIAL PRIMARY KEY,
  genre_type VARCHAR(255)
);

CREATE TABLE movie_genre (
  movie_id INT REFERENCES movie(id),
  genre_id INT REFERENCES genre(id)
);
