BEGIN

TRUNCATE 
  users RESTART IDENTITY CASCADE;


INSERT INTO users (id, user_name, password, nickname)
V
