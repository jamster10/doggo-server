BEGIN;

TRUNCATE 
  users_places,
  routes,
  places,
  notes,
  users
  RESTART IDENTITY CASCADE;


INSERT INTO users (user_name, password, nickname) 
VALUES
('sburkett0', 'KcOkr6AVhkHA', 'Sawyere'),
('wdulinty1', '4gwz7Yy', 'Whitney'),
('abakesef2', 'azDxVW97z', 'Andrea'),
('nflecknoe3', 'RLSVRklD70', null),
('sbizley4', 'POyxkZSsjSZJ', 'Skippy'),
('pmcvie5', 'GBnRjmkRURc', 'Patricio'),
('mspendley6', 'DAOVu3hHmU', 'Morse'),
('eshillinglaw7', 'zYGp2nv3', 'Ellery'),
('ichoppin8', 'lNMBEo', 'Ignace'),
('lcolegate9', 'RzVVk5POFjg', 'Lowe'),
('mhindera', 'WlPU09', 'Mason'),
('zturbefieldb', 'f8614K71KNQ', 'Zed'),
('klawiec', 'GN6jFxSTgZj', 'Kort'),
('psemoradd', 'LTfbKaZjg4j', 'Patric'),
('bgoodlude', 'AaiX1pCD', 'Bendix'),
('lredf', 'RhWVBER', 'Lorenzo'),
('aturpeyg', 'IZNe9Sou', null),
('eblecklyh', 'FdJ9np', null),
('abecklesi', 'BiJvugfr5', 'Andreas'),
('cweildishj', 'KfUI0R9CEVh', null);

COMMIT;

BEGIN;

INSERT INTO routes (origin, destination)
VALUES
('373 Graedel Avenue', '25 Montana Crossing'),
('0060 Blaine Avenue', '45314 Rusk Drive'),
('4266 Division Plaza', '521 Mayfield Terrace'),
('6 Sunnyside Plaza', '794 Grayhawk Trail');

COMMIT;

BEGIN;

INSERT INTO 
places (name, address, photo, phone, price_level, opening_hours, rating, user_rating_count, icon, id, route_id) 
VALUES 
('Feedfire', '56 Browning Hill', null, '297-261-7313', 5, 'nulla suscipit ligula in', 5, 9, 'http://dummyimage.com/240x167.bmp/ff4444/ffffff', 'G5p39k8pBbf26jJxW3s',1),
('Quimm', '04 Veith Way', 'http://dummyimage.com/104x190.bmp/cc0000/ffffff', '634-312-6722', null, null, null, 96, 'http://dummyimage.com/213x155.bmp/5fa2dd/ffffff', '99mE55p36mx2rhiwZ9t',2),
('Yodoo', '92287 Forest Dale Avenue', 'http://dummyimage.com/105x101.bmp/ff4444/ffffff', '625-490-1211', 4, 'luctus tincidunt nulla', 1, 75, 'http://dummyimage.com/125x212.bmp/cc0000/ffffff', 'x5aF6CgbFx90x5tuW6w',1),
('Vipe', '475 Clemons Lane', null, '156-361-3079', 2, 'amet diam in', 1, 68, 'http://dummyimage.com/147x196.bmp/5fa2dd/ffffff', 'O1y537qnV4z94xfj48m',4),
('Feedbug', '8499 American Ash Point', 'http://dummyimage.com/190x207.bmp/dddddd/000000', null, null, null, null, 82, 'http://dummyimage.com/122x193.bmp/cc0000/ffffff', 'D5jU3KibKeY5exIr25w' ,3),
('Livetube', '9 Nobel Crossing', 'http://dummyimage.com/121x136.bmp/5fa2dd/ffffff', '712-582-0251', 4, 'aenean lectus pellentesque', 3, 70, 'http://dummyimage.com/173x130.png/cc0000/ffffff', 'x91519r37yB8g62jL1k' ,1),
('Yakidoo', '76968 Killdeer Alley', null, '820-557-9435', 4, 'eu tincidunt in', 3, 39, 'http://dummyimage.com/229x181.png/ff4444/ffffff', 'd39I7tt4Q3B2fmzrA8r' ,2),
('Gabspot', '1 Nova Drive', null, '403-527-7433', 4, 'neque libero convallis eget', 4, 6, 'http://dummyimage.com/235x137.bmp/dddddd/000000', 'I3oC4wfqTcv7gfQfN3g' ,1),
('Jayo', '97334 Cambridge Drive', 'http://dummyimage.com/144x177.png/cc0000/ffffff', '936-478-1584', 2, 'vel nisl duis ac', 4, 74, 'http://dummyimage.com/181x153.jpg/dddddd/000000', '72iW9bwe0yj3pf0vR8m' ,3),
('Photospace', '7 Coleman Alley', 'http://dummyimage.com/169x227.png/dddddd/000000', '260-688-2338', null, null, null, 100, 'http://dummyimage.com/120x250.png/dddddd/000000', 'H13N407uT4R3eegeU8b' ,4),
('Wordpedia', '07085 Katie Lane', 'http://dummyimage.com/139x200.bmp/dddddd/000000', '759-679-0781', 4, 'pede ac diam cras', 1, 31, 'http://dummyimage.com/132x160.png/ff4444/ffffff', 'R9zT0E97Xfd1ng7cQ2j' ,1),
('Cogidoo', '7 Hoffman Center', 'http://dummyimage.com/148x128.jpg/cc0000/ffffff', '825-577-8757', 1, 'faucibus orci luctus', 5, 22, 'http://dummyimage.com/132x170.jpg/dddddd/000000', 'd1fX8qls8dk7miuiX6m' ,2),
('Shuffledrive', '55 Clove Road', null, '858-647-6211', 1, 'sem duis aliquam', 3, 44, 'http://dummyimage.com/224x141.jpg/ff4444/ffffff', 'R5z27Hc50mw7bmirF0k' ,3),
('Dynazzy', '443 Boyd Lane', 'http://dummyimage.com/212x199.bmp/5fa2dd/ffffff', '696-337-2854', null, null, null, 16, 'http://dummyimage.com/212x132.png/dddddd/000000', 'O99U4LfmL8G5y8SrH1p' ,2),
('Thoughtsphere', '460 Buell Drive', 'http://dummyimage.com/181x121.bmp/5fa2dd/ffffff', '561-623-2258', 4, 'placerat praesent blandit', 5, 66, 'http://dummyimage.com/127x178.png/5fa2dd/ffffff', 'd7v15ryi4yH6bc1q10f' ,4),
('Wordpedia', '112 Mccormick Plaza', null, '465-923-0907', 3, 'curae duis faucibus', 4, 26, 'http://dummyimage.com/109x156.jpg/cc0000/ffffff', 'Q7497D5fV4L4snwhE1y' ,1),
('Camido', '3 Fieldstone Way', null, '175-641-1053', 5, 'curabitur at ipsum ac', 2, 47, 'http://dummyimage.com/204x161.jpg/dddddd/000000', 'm7iI9jwcDgU3auHs84c' ,2),
('Mydo', '709 Morrow Point', 'http://dummyimage.com/151x146.png/5fa2dd/ffffff', '240-277-4611', null, null, null, 63, 'http://dummyimage.com/240x192.png/dddddd/000000', 't7x81Hg2Gds9ttOd90h' ,3),
('Yodo', '193 Sycamore Way', 'http://dummyimage.com/198x189.png/ff4444/ffffff', '506-232-7312', null, null, null, 31, 'http://dummyimage.com/140x183.png/dddddd/000000', 'a1jJ0RleZnI24atq84v' ,1),
('Thoughtbeat', '34373 Kedzie Terrace', null, '548-179-1109', 2, 'tortor eu pede', 4, 7, 'http://dummyimage.com/250x185.jpg/cc0000/ffffff', 'A3rX1m3jHwQ0v6XzJ2u' ,4);

COMMIT;

BEGIN;

INSERT INTO notes (user_id, note, date_added, place_id) 
VALUES
(17, 'In quis justo.', '2019-04-18 23:56:38', 'd7v15ryi4yH6bc1q10f'),
(10, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', '2018-11-17 12:16:53', 'd7v15ryi4yH6bc1q10f'),
(13, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', '2018-07-11 12:37:01', '99mE55p36mx2rhiwZ9t'),
(3, 'Phasellus in felis. Donec semper sapien a libero.', '2018-07-19 17:33:17', '99mE55p36mx2rhiwZ9t'),
(14, 'Proin risus.', '2018-12-31 00:12:31', 'Q7497D5fV4L4snwhE1y'),
(6, 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.', '2019-04-02 11:31:47', 'd39I7tt4Q3B2fmzrA8r'),
(8, 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '2018-05-31 10:50:24', 'Q7497D5fV4L4snwhE1y'),
(16, 'Duis bibendum. Morbi non quam nec dui luctus rutrum.', '2019-01-09 07:02:17', 'd39I7tt4Q3B2fmzrA8r'),
(13, 'Nunc purus.', '2019-05-24 22:44:08', 'Q7497D5fV4L4snwhE1y'),
(11, 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2019-01-10 10:31:04', 'd39I7tt4Q3B2fmzrA8r'),
(8, 'Proin eu mi.', '2018-10-15 03:58:55', 'Q7497D5fV4L4snwhE1y'),
(16, 'Morbi quis tortor id nulla ultrices aliquet.', '2019-01-18 07:39:41', 'Q7497D5fV4L4snwhE1y'),
(13, 'Quisque id justo sit amet sapien dignissim vestibulum.', '2018-07-27 18:53:44' ,'Q7497D5fV4L4snwhE1y'),
(3, 'Nunc rhoncus dui vel sem. Sed sagittis.', '2019-02-15 17:32:58' ,'Q7497D5fV4L4snwhE1y'),
(4, 'Phasellus in felis. Donec semper sapien a libero.', '2019-01-29 05:27:57', 'd39I7tt4Q3B2fmzrA8r'),
(16, 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', '2018-08-11 18:19:02', 'd39I7tt4Q3B2fmzrA8r'),
(6, 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '2018-10-06 23:23:15'  ,'A3rX1m3jHwQ0v6XzJ2u'),
(14, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', '2019-03-29 04:38:35', 'A3rX1m3jHwQ0v6XzJ2u'),
(13, 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '2018-09-13 08:39:07', 'A3rX1m3jHwQ0v6XzJ2u'),
(20, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', '2019-02-26 01:34:42', 'A3rX1m3jHwQ0v6XzJ2u');

COMMIT;

BEGIN;

INSERT INTO users_places (user_id, place_id) 
VALUES
(16, 'G5p39k8pBbf26jJxW3s'),
(8, 'a1jJ0RleZnI24atq84v'),
(5, 'a1jJ0RleZnI24atq84v'),
(13, 'D5jU3KibKeY5exIr25w'),
(10, 't7x81Hg2Gds9ttOd90h'),
(16, 'm7iI9jwcDgU3auHs84c'),
(14, 't7x81Hg2Gds9ttOd90h'),
(8, 'm7iI9jwcDgU3auHs84c'),
(8, 'D5jU3KibKeY5exIr25w'),
(10, 'D5jU3KibKeY5exIr25w'),
(3, 'd39I7tt4Q3B2fmzrA8r'),
(5, 'd39I7tt4Q3B2fmzrA8r'),
(16, 'd39I7tt4Q3B2fmzrA8r'),
(20, 'Q7497D5fV4L4snwhE1y'),
(20, 'd39I7tt4Q3B2fmzrA8r'),
(10, 'Q7497D5fV4L4snwhE1y'),
(7, 'd39I7tt4Q3B2fmzrA8r'),
(19, '99mE55p36mx2rhiwZ9t'),
(5, '99mE55p36mx2rhiwZ9t'),
(12, '99mE55p36mx2rhiwZ9t'),
(2, 'd39I7tt4Q3B2fmzrA8r'),
(18, 'A3rX1m3jHwQ0v6XzJ2u'),
(15, '99mE55p36mx2rhiwZ9t'),
(20, 'd7v15ryi4yH6bc1q10f'),
(18, 'd7v15ryi4yH6bc1q10f');

COMMIT;

