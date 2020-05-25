const calculateSpentTimePerUser = require('./calculateSpentTimePerUser');
const calculateSpentTimePerProject = require('./calculateSpentTimePerProject');
const calculateSpentTimePerDetailedProject = require('./calculateSpentTimePerDetailedProject');

function selectMode(parameters) {
  let sourceFilePath = parameters[3];
  let result;

  const commander = require('commander');
  commander
    .option('-u, --user', 'calculate spent time per each user')
    .option('-p, --project', 'calculate spent time per project')
    .option('-d, --detailedProject', 'calculate spent time per project with details on each task')
    .parse();

  if(commander.user) {
    result = calculateSpentTimePerUser(sourceFilePath);
  }

  if(commander.project) {
    result = calculateSpentTimePerProject(sourceFilePath);
  }

  if(commander.detailedProject) {
    result = calculateSpentTimePerDetailedProject(sourceFilePath);
  }

  return result
}

module.exports = selectMode;
