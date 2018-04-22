-- connect to database
\c movie_db

-- blow out any old tables with the same name
DROP TABLE IF EXISTS movie CASCADE;
DROP TABLE IF EXISTS movie_genre CASCADE;
DROP TABLE IF EXISTS genre CASCADE;

-- create new tables!
CREATE TABLE movie (
  id SERIAL PRIMARY KEY,
  title TEXT,
  director VARCHAR(255),
  release_year INT,
  description TEXT,
  img_url TEXT
  );

CREATE TABLE genre (
  id SERIAL PRIMARY KEY,
  genre_type VARCHAR(255)
);

CREATE TABLE movie_genre (
  movie_id INT REFERENCES movie(id),
  genre_id INT REFERENCES genre(id)
);

-- ALTER TABLE movie
-- ADD FOREIGN KEY (genre_id) REFERENCES genre(id);
