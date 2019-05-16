'use strict';

const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    user_name: 'jamster1',
    password: '$2a$05$YNkN2RlVsokFI6qdb1Wt7ObvNKZS01DHzR9ltVJYI7D9YPN10Cqoq',//password
    nickname: 'Kristof'
  }, 
  {
    id: 2,
    user_name: 'test-user',
    password: '$2a$05$brcqGxsCLeh3ic1XWO88oOMHYrai/ex45zAuvoJK36GTbrWIX9RGW',//guacamole2@
    nickname: 'Kelsey'
  },
  {
    id: 3,
    user_name: 'cookiemonster',
    password: '$2a$05$FiLswl4H27OYcl/m8uRm2eftYJ8vRNSFyzO89k53IgeN0/mkcR8jG',//alpharomero!@#~
    nickname: 'Riff Raff'
  }
];

const comments = [
  {
    id: 1,
    user_name: 3,
    owner: 1,
    text: 'This is a comment, I have opinions',
    date_created: '2029-01-22T16:28:32.615Z',

  },
  {
    id: 2,
    user_name: 1,
    owner: 1,
    text: 'This is a comment, I have opinions',
    date_created: '2029-01-22T16:28:32.615Z',
  },
  {
    id: 3,
    user_name: 2,
    owner: 2,
    text: 'This is a comment, I think things',
    date_created: '2029-01-22T16:28:32.615Z',

  },
  {
    id: 4,
    user_name: 3,
    owner: 2,
    text: 'This is a comment, blah blag',
    date_created: '2029-01-22T16:28:32.615Z',
  },
  {
    id: 5,
    user_name: 1,
    owner: 2,
    text: 'This is a comment,bleeple bloop',
    date_created: '2029-01-22T16:28:32.615Z',
  },
];

function makeUsers() {
  return users;
}

function makecomments() {
  return comments;
}

function make
//bcrypt.hash('alpharomero!@#~', 5).then(console.log)