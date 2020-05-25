function calculateSpentTimePerProject(sourceFilePath) {

  const timeRecordsStringRegExp = new RegExp(/^\#{6}[^#].*/, 'gm');
  const projectIDStringRegExp = new RegExp(/(?<=(^\#{6}[^#].*\s*))^\w+/, 'gm');
  const projectIDRegExp = new RegExp(/(?<=\w*)([a-zA-Z0-9]+)_([a-zA-Z0-9]+)$/, 'gm');

  const fs = require("fs");

  let timeRecordsStrings = fs.readFileSync(`${sourceFilePath}`, "utf8").match(timeRecordsStringRegExp);
  let userToTimeEntryMaps = createUserToTimeEntryMaps(timeRecordsStrings);
  let totalTimePerEachString = calculateTotalTimePerEachString(userToTimeEntryMaps);
  console.log(totalTimePerEachString.length);

  let rawStringsWithProjectID = fs.readFileSync(`${sourceFilePath}`, "utf8").match(projectIDStringRegExp);
  let projectIDs = selectProjectID(rawStringsWithProjectID, projectIDRegExp);
  let projectIDToTimeEntryMap = createProjectIDToTimeEntryMap(projectIDs, totalTimePerEachString);
  let convertedTimeForEachProjectID = convertMinToHoursForEachEntry(projectIDToTimeEntryMap); 
  
  return convertedTimeForEachProjectID;
}

function createUserToTimeEntryMaps(timeRecordsStrings) {
  let userToTimeEntryMaps = [];
  const calculateSpentTimeFromString = require ('./calculateSpentTimeFromString.js');

  timeRecordsStrings.forEach((string => {
    if(calculateSpentTimeFromString(string)) {
      userToTimeEntryMaps.push(calculateSpentTimeFromString(string))
    } else {
      userToTimeEntryMaps.push(0)
    }
  }));

  return userToTimeEntryMaps;
}

function calculateTotalTimePerEachString(userToTimeEntryMaps) {
  let totalTimePerEachStringArray = [];

  for (let item in userToTimeEntryMaps) {
    let map = userToTimeEntryMaps[item];
    let totalTimePerOneString = 0;

    for (let user in map) {
      totalTimePerOneString += map[user];
    }

    totalTimePerEachStringArray.push(totalTimePerOneString)
  }

  return totalTimePerEachStringArray;
}

function selectProjectID(rawStringsWithProjectID, projectIDRegExp) {
  let projectIDs = [];
  rawStringsWithProjectID.forEach((item) => {
    let projectID;

    if(item.match(projectIDRegExp)) {
      projectID = item.match(projectIDRegExp)[0];
    }

    projectIDs.push(projectID);
  })

  return projectIDs;
}

function createProjectIDToTimeEntryMap(projectIDs, totalTimePerEachString) {
  let projectIDToTimeEntryMap = {};

  projectIDs.forEach((item, index) => {
    if(!projectIDToTimeEntryMap[item]) {
      projectIDToTimeEntryMap[item] = totalTimePerEachString[index];
    } else {
      projectIDToTimeEntryMap[item] += totalTimePerEachString[index];
    }
  })

  return projectIDToTimeEntryMap;
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

module.exports = calculateSpentTimePerProject;