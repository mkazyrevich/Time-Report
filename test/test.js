let selectMode = require ('../src/selectMode.js');

const assert = require('chai').assert;
const fs = require("fs");

describe('calculateTime()', function() {
  let tests = [
    {
      parameters: ['node', 'src/calculateTime.js', '--user', './test/test.txt', './test/result.txt'], 
      expected: {
        "vlad": "292h 15m",
        "r": "0h 22m",
        "g": "3h 5m",
        "v": "80h 40m",
        "a": "54h 37m",
        "e": "3h 30m",
        "pp": "1h 6m",
        "maks": "33h 0m",
        "Total time:": "468h 35m"
      }, 
    },
    {
      parameters: ['node', 'src/calculateTime.js', '-u', './test/test.txt', './test/result.txt'], 
      expected: {
        "vlad": "292h 15m",
        "r": "0h 22m",
        "g": "3h 5m",
        "v": "80h 40m",
        "a": "54h 37m",
        "e": "3h 30m",
        "pp": "1h 6m",
        "maks": "33h 0m",
        "Total time:": "468h 35m"
      }, 
    },
    {
      parameters: ['node', 'src/calculateTime.js', '--project', './test/test.txt', './test/result.txt'], 
      expected: {
        "Project_test": "231h 57m",
        "project_1": "199h 33m",
        "Test_ID": "1h 10m",
        "project_3": "35h 55m"
      }
    },
    {
      parameters: ['node', 'src/calculateTime.js', '-p', './test/test.txt', './test/result.txt'], 
      expected: {
        "Project_test": "231h 57m",
        "project_1": "199h 33m",
        "Test_ID": "1h 10m",
        "project_3": "35h 55m"
      }
    },
    {
      parameters: ['node', 'src/calculateTime.js', '--detailedProject', './test/test.txt', './test/result.txt'], 
      expected: {
        "Project_test": {
          "Total Time": "231h 57m",
          "task_2": "175h 12m",
          "sample_task_1": "52h 5m",
          "task_3": "4h 40m"
        },
        "project_1": {
          "Total Time": "199h 33m",
          "Sample_task_2": "135h 6m",
          "Sample_task_1": "64h 27m"
        }, 
        "Test_ID": {
          "Total Time": "1h 10m",
          "task_1": "1h 10m"
        },
        "project_3": {
          "Total Time": "35h 55m",
          "task_1": "35h 55m"
        }
      }
    },
    {
      parameters: ['node', 'src/calculateTime.js', '-d', './test/test.txt', './test/result.txt'], 
      expected: {
        "Project_test": {
          "Total Time": "231h 57m",
          "task_2": "175h 12m",
          "sample_task_1": "52h 5m",
          "task_3": "4h 40m"
        },
        "project_1": {
          "Total Time": "199h 33m",
          "Sample_task_2": "135h 6m",
          "Sample_task_1": "64h 27m"
        }, 
        "Test_ID": {
          "Total Time": "1h 10m",
          "task_1": "1h 10m"
        },
        "project_3": {
          "Total Time": "35h 55m",
          "task_1": "35h 55m"
        }
      }
    },
  ] 

  tests.forEach(function(test) {
    process.argv = test.parameters;
    let rawSource = fs.readFileSync(`${process.argv[3]}`, "utf8");
    let source = rawSource.replace(/\r\n/g, '\n');
    fs.writeFileSync(`${process.argv[4]}` , JSON.stringify(selectMode(process.argv), null, '\t'));
    let rawResultString = fs.readFileSync(`${process.argv[4]}`, "utf8");
    let resultString = rawResultString.replace(/\t/g, ' ')

    it(`mode: ${process.argv[2]}
        
        source: ${source}

        expected: ${JSON.stringify(test.expected, null, ' ')}

        result: ${resultString}`, function() {
        assert.equal(resultString, JSON.stringify(test.expected, null, ' '));
    });
  });
});