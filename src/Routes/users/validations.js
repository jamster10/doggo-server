'use strict'; 

const validUserName = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+/;


module.exports = {
  checkUserName(userName) {
    if (userName == null || undefined) return problem('username');
    if (userName.trim().length <  3 || userName.length > 15) return problem('username');
    if (!validUserName.test(userName) || userName.includes('<script')) return problem('username');
  },
  checkPassword(password){
    if (password == null || undefined){ console.log('aaaa'); return problem('password');}
    if (password.trim().length < 8 || password.length > 60) { console.log('aaaa'); return problem('password');}
    if (password.includes('<')|| password.includes('>')) return problem('password')
  },
  checkNickname(nickname){
    if (nickname && nickname.trim().length > 2){
      if (nickname.includes('<')|| nickname.includes('>') || nickname.length > 15) {
        return problem('nickname');
      }
    } 
  },
}

function problem(type){
  return {
    message: type + ' invalid'
  };
}

