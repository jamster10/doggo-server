BEGIN;

CREATE TABLE users_places (
  user_id INTEGER REFERENCES users(id),
  place_id TEXT REFERENCES places(id),
  PRIMARY KEY (user_id, place_id)
);

COMMIT;