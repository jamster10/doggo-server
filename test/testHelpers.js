'use strict';

const bcrypt = require('bcryptjs');

//USER DATA
const users = [
  {
    id: 1,
    user_name: 'jamster1',
    password: '$2b$12$QvZYY1OCZ1l7ndOjlOfnduTdRgIXy7STz.Qjw7tqLEGm.sfi2S3R2',//password
    nickname: 'Kristof'
  }, 
  {
    id: 2,
    user_name: 'test-user',
    password: '$2b$12$Mf0Blfs/b4aSpGrcQuVAFuF3XB4EfbCpHqFo7LwUFoBo.LzmPLR52',//guacamole2@
    nickname: 'Kelsey'
  },
  {
    id: 3,
    user_name: 'cookiemonster',
    password: '$2b$12$gZO4XwcsCOY76nSxCG715O866U8kphGNqOeaSZr9KWu8HqdzOojNm',//alpharomero!@#~
    nickname: 'Riff Raff'
  }
];
//TEST NOTES
const notes = [
  {
    user_id: 1,
    place_id: 3,
    note: 'This is a comment, I have opinions',
    date_added: '2029-01-22T16:28:32.615Z',

  },
  {
    user_id: 1,
    place_id: 3,
    note: 'This is a comment, I have more opinions',
    date_added: '2029-01-22T16:28:33.615Z',
  },
  {
    user_id: 3,
    place_id: 1,
    note: 'I sometimes care about things to say',
    date_added: '2029-01-22T16:28:32.615Z',

  },
  {
    user_id: 2,
    place_id: 1,
    note: 'I have opinions',
    date_added: '2029-01-22T16:28:35.615Z',
  },
  {
    user_id: 3,
    place_id: 3,
    note: 'This is a comment',
    date_added: '2029-01-22T16:28:34.615Z',
  },
];
//
const places = [
  {
    id: '1',
    route_id: 2,
    name: 'Dabjam',
    address: '49 Oak Alley',
    photo: 'http://dummyimage.com/230x232.bmp/dddddd/000000',
    phone: '623-206-8860',
    price_level: 3,
    opening_hours: 'venenatis non',
    rating: 5,
    user_rating_count: 143,
    icon: 'http://dummyimage.com/194x126.jpg/dddddd/000000'
  },{  
    id: '2',
    route_id: 4,
    name: 'Tagchat',
    address: '67781 Helena Drive',
    photo: 'http://dummyimage.com/107x111.bmp/dddddd/000000',
    phone: '276-879-5529',
    price_level: 4,
    opening_hours: 'magna bibendum',
    rating: 2,
    user_rating_count: 136,
    icon: 'http://dummyimage.com/157x186.png/5fa2dd/ffffff'
  }, {
    id: '3',
    route_id: 3,
    name: 'Centidel',
    address: '9 Sommers Crossing',
    photo: 'http://dummyimage.com/135x186.jpg/cc0000/ffffff',
    phone: '906-386-8646',
    price_level: 1,
    opening_hours: 'est lacinia',
    rating: 4,
    user_rating_count: 248,
    icon: 'http://dummyimage.com/191x202.png/cc0000/ffffff'
  }, {
    id: '4',
    route_id: 3,
    name: 'Linkbuzz',
    address: '07 Merchant Park',
    photo: 'http://dummyimage.com/154x189.jpg/cc0000/ffffff',
    phone: '259-795-0344',
    price_level: 1,
    opening_hours: 'suspendisse',
    rating: 2,
    user_rating_count: 187,
    icon: 'http://dummyimage.com/224x192.jpg/dddddd/000000'
  }, {
    id: '5',
    route_id: 3,
    name: 'Devcast',
    address: '71 Stuart Junction',
    photo: 'http://dummyimage.com/178x175.jpg/5fa2dd/ffffff',
    phone: '447-391-5218',
    price_level: 4,
    opening_hours: 'eu pede',
    rating: 4,
    user_rating_count: 139,
    icon: 'http://dummyimage.com/241x206.bmp/cc0000/ffffff'
  }, {
    id: '6',
    route_id: 4,
    name: 'Katz',
    address: '1134 Thierer Court',
    photo: 'http://dummyimage.com/157x137.png/dddddd/000000',
    phone: '421-384-4014',
    price_level: 2,
    opening_hours: 'sapien',
    rating: 1,
    user_rating_count: 64,
    icon: 'http://dummyimage.com/160x190.png/ff4444/ffffff'
  }, {
    id: '7',
    route_id: 3,
    name: 'Skinte',
    address: '93 Mifflin Junction',
    photo: 'http://dummyimage.com/195x167.png/ff4444/ffffff',
    phone: '240-379-5796',
    price_level: 1,
    opening_hours: 'bibendum',
    rating: 4,
    user_rating_count: 106,
    icon: 'http://dummyimage.com/223x163.png/dddddd/000000'
  }, {
    id: '8',
    route_id: 2,
    name: 'Zazio',
    address: '27 Briar Crest Court',
    photo: 'http://dummyimage.com/207x173.bmp/cc0000/ffffff',
    phone: '465-956-0986',
    price_level: 5,
    opening_hours: 'quis orci',
    rating: 4,
    user_rating_count: 202,
    icon: 'http://dummyimage.com/196x127.png/ff4444/ffffff'
  }, {
    id: '9',
    route_id: 4,
    name: 'Meeveo',
    address: '2782 Clyde Gallagher Park',
    photo: 'http://dummyimage.com/181x233.png/dddddd/000000',
    phone: '558-453-0096',
    price_level: 1,
    opening_hours: 'ultrices posuere',
    rating: 2,
    user_rating_count: 16,
    icon: 'http://dummyimage.com/227x107.png/dddddd/000000'
  }, {
    id: '10',
    route_id: 4,
    name: 'Zazio',
    address: '16727 Sycamore Court',
    photo: 'http://dummyimage.com/154x200.jpg/dddddd/000000',
    phone: '867-308-3029',
    price_level: 2,
    opening_hours: 'eget',
    rating: 1,
    user_rating_count: 214,
    icon: 'http://dummyimage.com/110x119.png/cc0000/ffffff'
  }, {
    id: '11',
    route_id: 4,
    name: 'Oloo',
    address: '82134 Messerschmidt Lane',
    photo: 'http://dummyimage.com/177x246.bmp/cc0000/ffffff',
    phone: '137-530-5776',
    price_level: 2,
    opening_hours: 'tortor',
    rating: 5,
    user_rating_count: 112,
    icon: 'http://dummyimage.com/249x125.png/cc0000/ffffff'
  }, {
    id: '12',
    route_id: 3,
    name: 'Riffpedia',
    address: '6 Alpine Terrace',
    photo: 'http://dummyimage.com/249x200.png/ff4444/ffffff',
    phone: '134-251-7202',
    price_level: 2,
    opening_hours: 'amet eleifend',
    rating: 3,
    user_rating_count: 213,
    icon: 'http://dummyimage.com/168x140.png/ff4444/ffffff'
  }, {
    id: '13',
    route_id: 1,
    name: 'Trilia',
    address: '6 Nelson Court',
    photo: 'http://dummyimage.com/151x208.jpg/cc0000/ffffff',
    phone: '858-842-3610',
    price_level: 1,
    opening_hours: 'in magna',
    rating: 1,
    user_rating_count: 54,
    icon: 'http://dummyimage.com/144x116.png/dddddd/000000'
  }, {
    id: '14',
    route_id: 1,
    name: 'Feedfire',
    address: '77323 Hagan Drive',
    photo: 'http://dummyimage.com/224x108.bmp/dddddd/000000',
    phone: '293-810-9030',
    price_level: 2,
    opening_hours: 'quam',
    rating: 3,
    user_rating_count: 236,
    icon: 'http://dummyimage.com/231x217.png/ff4444/ffffff'
  }, {
    id: '15',
    route_id: 2,
    name: 'Vinte',
    address: '7 Calypso Avenue',
    photo: 'http://dummyimage.com/103x227.jpg/ff4444/ffffff',
    phone: '786-574-9751',
    price_level: 4,
    opening_hours: 'cras',
    rating: 5,
    user_rating_count: 177,
    icon: 'http://dummyimage.com/214x135.jpg/ff4444/ffffff'
  }, {
    id: '16',
    route_id: 2,
    name: 'Topiczoom',
    address: '2 Cottonwood Lane',
    photo: 'http://dummyimage.com/237x151.jpg/cc0000/ffffff',
    phone: '535-362-8232',
    price_level: 3,
    opening_hours: 'proin',
    rating: 3,
    user_rating_count: 211,
    icon: 'http://dummyimage.com/189x225.png/ff4444/ffffff'
  }, {
    id: '17',
    route_id: 3,
    name: 'Mynte',
    address: '8697 4th Street',
    photo: 'http://dummyimage.com/130x128.jpg/5fa2dd/ffffff',
    phone: '380-862-2878',
    price_level: 2,
    opening_hours: 'id lobortis',
    rating: 1,
    user_rating_count: 112,
    icon: 'http://dummyimage.com/187x115.jpg/ff4444/ffffff'
  }, {
    id: '18',
    route_id: 3,
    name: 'Dabvine',
    address: '396 Warrior Avenue',
    photo: 'http://dummyimage.com/131x182.png/dddddd/000000',
    phone: '893-838-4275',
    price_level: 2,
    opening_hours: 'posuere',
    rating: 3,
    user_rating_count: 133,
    icon: 'http://dummyimage.com/202x178.bmp/dddddd/000000'
  }, {
    id: '19',
    route_id: 3,
    name: 'Photobug',
    address: '32 Pearson Park',
    photo: 'http://dummyimage.com/103x167.jpg/dddddd/000000',
    phone: '914-691-5581',
    price_level: 3,
    opening_hours: 'rhoncus aliquam',
    rating: 1,
    user_rating_count: 235,
    icon: 'http://dummyimage.com/133x230.bmp/5fa2dd/ffffff'
  }, {
    id: '20',
    route_id: 2,
    name: 'Abata',
    address: '97 Bayside Circle',
    photo: 'http://dummyimage.com/141x162.png/cc0000/ffffff',
    phone: '160-143-1888',
    price_level: 2,
    opening_hours: 'pede lobortis',
    rating: 2,
    user_rating_count: 248,
    icon: 'http://dummyimage.com/161x132.jpg/5fa2dd/ffffff'
  }];

const routes = [
  {
    id: 1,
    origin: '56 Vidon Drive',
    destination: '07 Green Ridge Point'
  }, 
  {
    id: 2, 
    origin: '3422 Meadow Valley Drive',
    destination: '4 Ilene Crossing'
  }, 
  {
    id: 3,
    origin: '653 North Point',
    destination: '8602 8th Road'
  }, 
  {
    id: 4,
    origin: '1 Towne Alley',
    destination: '5 Di Loreto Place'
  }
];

const users_places = [
  {
    user_id: 3,
    place_id: '10'
  }, {
    user_id: 1,
    place_id: '8'
  }, {
    user_id: 3,
    place_id: '12'
  }, {
    user_id: 3,
    place_id: '13'
  }, {
    user_id: 2,
    place_id: '13'
  }, {
    user_id: 2,
    place_id: '9'
  }, {
    user_id: 2,
    place_id: '7'
  }, {
    user_id: 3,
    place_id: '5'
  }, {
    user_id: 2,
    place_id: '18'
  }, {
    user_id: 3,
    place_id: '1'
  }, {
    user_id: 3,
    place_id: '2'
  }, {
    user_id: 3,
    place_id: '12'
  }, {
    user_id: 2,
    place_id: '10'
  }, {
    user_id: 1,
    place_id: '11'
  }, {
    user_id: 3,
    place_id: '4'
  }, {
    user_id: 1,
    place_id: '1'
  }, {
    user_id: 3,
    place_id:'14'
  }, {
    user_id: 1,
    place_id: '18'
  }, {
    user_id: 3,
    place_id: '16'
  }

];

function clearTables(DB) {
  return DB.transaction( trx => 
    trx.raw(
      `TRUNCATE 
      users_places,
      routes,
      places,
      notes,
      users
      RESTART IDENTITY CASCADE;
      `)
      .then(() =>
        Promise.all([
          trx.raw('ALTER SEQUENCE users_id_seq minvalue 0 START WITH 1'),
          // eslint-disable-next-line quotes
          trx.raw(`SELECT setval('users_id_seq', 0)`),
          trx.raw('ALTER SEQUENCE routes_id_seq minvalue 0 START WITH 1'),
          // eslint-disable-next-line quotes
          trx.raw(`SELECT setval('routes_id_seq', 0)`),
          trx.raw('ALTER SEQUENCE notes_id_seq minvalue 0 START WITH 1'),
          // eslint-disable-next-line quotes
          trx.raw(`SELECT setval('notes_id_seq', 0)`),

        ])
      )
  );
}   
          
function seedUsers(DB) {
  return DB
    .insert(users)
    .into('users')
    .then(_ => 
      DB.raw(
        `SELECT setval('users_id_seq', ?)`,
        users[users.length - 1].id
      ));
}
          
function seedRoutes(DB) {
  return DB
    .insert(routes)
    .into('routes')
    .then( () => 
      DB.raw(
        `SELECT setval('routes_id_seq', ?)`,
        routes[routes.length - 1].id
      ));
}
          
function seedPlaces(DB) {
  return DB
    .insert(places)
    .into('places')
    .then(_ => 
      DB.raw(
        `SELECT setval('places_id_seq', ?)`,
        places[places.length - 1].id
      ));
}
          
function seedNotes(DB) {
  return DB
    .insert(notes)
    .into('notes')
    .then(_ =>
      DB.raw(
        `SELECT setval('notes_id_seq', ?)`,
        notes[notes.length - 1].id
      ));
} 

          
function seedUsersPlaces(DB) {
  return DB
    .insert(users_places)
    .into('users_places');
}

function makeUsers() {
  return users;
}

function makeNotes() {
  return notes;
}

function makePlaces() {
  return places;
}

function makeRoutes() {
  return routes;
}

function makeUsersPlaces() {
  return users_places;
}

function seedTables() {
  seedUsers();
  seedRoutes();
  seedPlaces();
  seedNotes();
  seedUsersPlaces();
}

module.exports={
  makeNotes,
  makeUsers,
  makePlaces,
  makeRoutes,
  makeUsersPlaces,
  seedUsers,
  seedNotes,
  seedRoutes,
  seedUsersPlaces,
  clearTables,
  seedTables
};