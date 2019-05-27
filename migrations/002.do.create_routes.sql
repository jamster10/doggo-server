BEGIN;
CREATE TABLE places (
  id TEXT PRIMARY KEY NOT NULL,
  route_id INTEGER REFERENCES routes(id),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  photo TEXT,
  phone TEXT,
  price_level NUMERIC,
  opening_hours TEXT,
  rating NUMERIC,
  user_rating_count NUMERIC,
  icon TEXT
);
COMMIT