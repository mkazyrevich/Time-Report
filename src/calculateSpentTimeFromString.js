function calculateSpentTimeFromString(sourceString) {

  const timeRegExp = new RegExp(/[ ][0-9.]+h?([0-9.]+)?m?(?=,|$| )/, 'g');
  const userRegExp = new RegExp(/[ ][A-Za-z]([^, ]+)?(?= +[0-9.]+h?([0-9.]+)?m?(,|$| )?)/, 'g'); 
  const timeConvertRegExp = new RegExp(/[0-9.]+h([0-9.]+)?/, 'g');

  let timeRecordsRawString = rightSubstring(sourceString, ";");
  let users = usersFromTimeRecordsRawString(timeRecordsRawString);
  let userToTimeEntryMap = createUserToTimeEntryMap(users, timeRecordsRawString);
  userToTimeEntryMap = removeMinUnitSpecifier(userToTimeEntryMap);
  userToTimeEntryMap = convertHoursToMinutes(userToTimeEntryMap);
  userToTimeEntryMap = sumTimeRecordsPerUser(userToTimeEntryMap);

  
  function rightSubstring(string, divider) {
    return ' ' + string.split(divider)[1] + ' '
  }

  function usersFromTimeRecordsRawString(string) {

    let users = string.match(userRegExp);

    if (users) {
      users = users.map((item) => item.replace(/,| /g, ''));
    }
    return users;
  }

  function createUserToTimeEntryMap(users, timeRecordsRawString) {

    if(!users) {
      return
    }

    let userToTimeEntryMap = {};

    for (let i = 0; i< users.length; i++) {

      let indexOfUserName = timeRecordsRawString.indexOf(users[i]);
      let lengthOfUserName = users[i].length;
      let indexOfNextUserName = timeRecordsRawString.indexOf(users[i+1], indexOfUserName + 1);
      let timesWithSpacesArray = timeRecordsRawString.slice(indexOfUserName+lengthOfUserName, indexOfNextUserName).match(timeRegExp);
      let timesWithoutSpacesArray = timesWithSpacesArray.map((item) => item.replace(/,| /g, ''));

      if(!userToTimeEntryMap[users[i]]) {
        userToTimeEntryMap[users[i]] = timesWithoutSpacesArray;
      } else {
        timesWithoutSpacesArray.forEach((item) => userToTimeEntryMap[users[i]].push(item));
      }
  
      timeRecordsRawString = timeRecordsRawString.slice(indexOfUserName+lengthOfUserName);
    }
    return userToTimeEntryMap
  }

    function removeMinUnitSpecifier(userToTimeEntryMap) {
      for (let user in userToTimeEntryMap) {
        userToTimeEntryMap[user] = userToTimeEntryMap[user].map((time) => time.replace(/m/g, ''))
      }
      return userToTimeEntryMap;
    }

    function convertHoursToMinutes(userToTimeEntryMap) {
      for (let user in userToTimeEntryMap) {
        for(let i = 0; i < userToTimeEntryMap[user].length; i++) {
          if(userToTimeEntryMap[user][i].match(timeConvertRegExp)) {
            let hoursToMinutes = userToTimeEntryMap[user][i].slice(0, userToTimeEntryMap[user][i].indexOf('h'))*60;
            let minutes = userToTimeEntryMap[user][i].slice(userToTimeEntryMap[user][i].indexOf('h')+1);
            userToTimeEntryMap[user][i] = +userToTimeEntryMap[user][i].replace(timeConvertRegExp, +hoursToMinutes + +minutes);
          } else {
            userToTimeEntryMap[user][i] = +userToTimeEntryMap[user][i]
          }
        }
      }
      return userToTimeEntryMap
    }

    function sumTimeRecordsPerUser(userToTimeEntryMap) {
      for (let user in userToTimeEntryMap) {
        userToTimeEntryMap[user] = userToTimeEntryMap[user].reduce((accumulator, currentValue) => +accumulator + +currentValue);
      }
      return userToTimeEntryMap;
    }

  return userToTimeEntryMap;
}

module.exports = calculateSpentTimeFromString
