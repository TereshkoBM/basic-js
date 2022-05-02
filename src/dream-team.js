const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)) return false;
  let name = '';
  let arr = members.map(function(item) {
    if(typeof(item) === "string") 
      return (item.trim()).toUpperCase();  
  });
  let m=arr.sort();
  console.log(m);
  m.forEach(function(item) {
    if(typeof(item) === "string") name+=item[0];    
  });
  if( name === '') return false;
  else return name;
}

module.exports = {
  createDreamTeam
};
