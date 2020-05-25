function calculateSpentTimePerUser(sourceFilePath, targetFilePath) {

  const fs = require("fs");
  const timeRecordsStringRegExp = new RegExp(/^\#{6}[^#].*/, 'gm');

  let timeRecordsStrings = fs.readFileSync(`${sourceFilePath}`, "utf8").match(timeRecordsStringRegExp);
  let userToTimeEntryMaps = createUserToTimeEntryMaps(timeRecordsStrings);
  let timeForEachUser = calculateTotalTimeForEachUser(userToTimeEntryMaps);
  let timeForEachUserWithTotalTime = calculateTotalTimeForAllUsers(timeForEachUser);
  let convertedTimeForEachUserWithTotalTime = convertMinToHoursForEachEntry(timeForEachUserWithTotalTime);

  fs.writeFileSync(`${targetFilePath}` , JSON.stringify(convertedTimeForEachUserWithTotalTime, null, '\t'));
}

function createUserToTimeEntryMaps(timeRecordsStrings) {
  let userToTimeEntryMaps = [];
  const calculateSpentTimeFromString = require ('./calculateSpentTimeFromString.js');

  timeRecordsStrings.forEach((string => {
    userToTimeEntryMaps.push(calculateSpentTimeFromString(string))
  }));

  return userToTimeEntryMaps;
}

function calculateTotalTimeForEachUser(userToTimeEntryMaps) {
  let totalTimeForEachUser = {};

  for (let item in userToTimeEntryMaps) {
    let map = userToTimeEntryMaps[item];

    for (let user in map) {
      if(!totalTimeForEachUser[user]) {
        totalTimeForEachUser[user] = map[user];
      } else {
        totalTimeForEachUser[user] += map[user] 
      }
    }
  }

  return totalTimeForEachUser
}

function calculateTotalTimeForAllUsers(timeForEachUser) {
  let totalTime = 0;
  
  for (let user in timeForEachUser) {
    totalTime += timeForEachUser[user];
  }
  
  timeForEachUser["Total time:"] = totalTime;
  return timeForEachUser;
}

function convertMinToHours(timeStringInMin) {

  let hours = Math.floor(timeStringInMin / 60);
  let minutes = timeStringInMin - hours * 60;
  let timeStringInHours = hours + 'h ' + minutes + 'm';

  return timeStringInHours
}

function convertMinToHoursForEachEntry(mapWithTimeEntries) {

  let convertedMapWithTimeEntries = {};

  for (let item in mapWithTimeEntries) {
    if(typeof mapWithTimeEntries[item] === 'object') {
      convertedMapWithTimeEntries[item] = convertMinToHoursForEachEntry(mapWithTimeEntries[item]);
    } else {
      convertedMapWithTimeEntries[item] = convertMinToHours(mapWithTimeEntries[item]);
    }
  }

  return convertedMapWithTimeEntries
}

module.exports = calculateSpentTimePerUser;