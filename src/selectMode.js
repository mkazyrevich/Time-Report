const calculateSpentTimePerUser = require('./calculateSpentTimePerUser');
const calculateSpentTimePerProject = require('./calculateSpentTimePerProject');
const calculateSpentTimePerDetailedProject = require('./calculateSpentTimePerDetailedProject');

function selectMode(parameters) {
  let sourceFilePath = parameters[3];
  let targetFilePath = parameters[4];

  const commander = require('commander');
  commander
    .option('-u, --user', 'calculate spent time per each user')
    .option('-p, --project', 'calculate spent time per project')
    .option('-d, --detailedProject', 'calculate spent time per project with details on each task')
    .parse();

  if(commander.user) {
    calculateSpentTimePerUser(sourceFilePath, targetFilePath);
  }

  if(commander.project) {
    calculateSpentTimePerProject(sourceFilePath, targetFilePath);
  }

  if(commander.detailedProject) {
    calculateSpentTimePerDetailedProject(sourceFilePath, targetFilePath);
  }
}

module.exports = selectMode;
