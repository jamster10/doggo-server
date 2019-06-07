BEGIN;
CREATE TABLE places (
  place_id TEXT PRIMARY KEY NOT NULL,
  user_id NUMERIC NOT NULL,
  -- route_id INTEGER REFERENCES routes(id),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  price_level TEXT NOT NULL,
  rating NUMERIC NOT NULL,
  user_ratings_total NUMERIC NOT NULL,
  saved BOOLEAN NOT NULL
);
COMMIT
-- temp solution userID in table