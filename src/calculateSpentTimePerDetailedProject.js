function calculateSpentTimePerDetailedProject(sourceFilePath) {

  const timeRecordsStringRegExp = new RegExp(/^\#{6}[^#].*/, 'gm');
  const projectIDStringRegExp = new RegExp(/(?<=(^\#{6}[^#].*\s))^\w+/, 'gm');
  const projectIDRegExp = new RegExp(/(?<=\w*)([a-zA-Z0-9]+)_([a-zA-Z0-9]+)$/, 'gm');

  const fs = require("fs");

  let timeRecordsStrings = fs.readFileSync(`${sourceFilePath}`, "utf8").match(timeRecordsStringRegExp);
  let userToTimeEntryMaps = createUserToTimeEntryMaps(timeRecordsStrings);
  let totalTimePerEachString = calculateTotalTimePerEachString(userToTimeEntryMaps);

  let rawStringsWithProjectID = fs.readFileSync(`${sourceFilePath}`, "utf8").match(projectIDStringRegExp);
  let projectIDs = selectProjectID(rawStringsWithProjectID, projectIDRegExp);
  let tasks = selectTask(rawStringsWithProjectID, projectIDs);
  let projectIDWithTasksToTimeEntryMap = createProjectIDWithTasksToTimeEntryMap(projectIDs, tasks, totalTimePerEachString);
  let sortedProjectIDWithTasksToTimeEntryMap = sortTasksTimesPerEachProject(projectIDWithTasksToTimeEntryMap);
  let convertedTimeForEachProjectIDWithTasks = convertMinToHoursForEachEntry(sortedProjectIDWithTasksToTimeEntryMap);
  
  return convertedTimeForEachProjectIDWithTasks;
}

function createUserToTimeEntryMaps(timeRecordsStrings) {
  let userToTimeEntryMaps = [];
  const calculateSpentTimeFromString = require ('./calculateSpentTimeFromString.js');

  timeRecordsStrings.forEach((string => {
    if(calculateSpentTimeFromString(string)) {
      userToTimeEntryMaps.push(calculateSpentTimeFromString(string))
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

function selectTask(rawStringsWithProjectID, projectIDs) {
  let tasks = [];
  let task = '';
  rawStringsWithProjectID.forEach((string, index) => {
    let projectID = projectIDs[index];
    task = string.slice(0, string.indexOf(projectID)-1);

    tasks.push(task);
  })

  return tasks;
}

function createProjectIDWithTasksToTimeEntryMap(projectIDs, tasks, totalTimePerEachString) {
  let projectIDWithTasksToTimeEntryMap = {};

  projectIDs.forEach((item, index) => {
    let project = {};
    let task = tasks[index];
    if(!projectIDWithTasksToTimeEntryMap[item]) {
      projectIDWithTasksToTimeEntryMap[item] = project;
      project['Total Time'] = totalTimePerEachString[index]
    } else {
      project = projectIDWithTasksToTimeEntryMap[item];
      project['Total Time'] += totalTimePerEachString[index];
    }
    project[task] = totalTimePerEachString[index];
  })
  return projectIDWithTasksToTimeEntryMap;
}

function convertMinToHours(timeStringInMin) {

  let hours = Math.floor(+timeStringInMin / 60);
  let minutes = +timeStringInMin - hours * 60;
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

function sortTasksTimesPerEachProject(mapWithTimeEntries) {
  let sortedMapWithTimeEntries = {};
  let projectWithProjectTasks = [];

  projectWithProjectTasks = Object.entries(mapWithTimeEntries);

  projectWithProjectTasks.forEach((item) => {
    item[1] = Object.entries(item[1]);
  })

  projectWithProjectTasks.forEach((item) => {
    item[1] = item[1].sort((item1, item2) => {return item2[1] - item1[1]});
  })

  projectWithProjectTasks.forEach((item) => {
    sortedMapWithTimeEntries[item[0]] = item[1];
  })

  for (let project in sortedMapWithTimeEntries) {
    let taskTime = {};
    for (let task of sortedMapWithTimeEntries[project]) {
      taskTime[task[0]] = task[1];
      sortedMapWithTimeEntries[project] = taskTime
    }
  }

  return sortedMapWithTimeEntries
}

module.exports = calculateSpentTimePerDetailedProject;