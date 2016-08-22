/**
 * Created by ----
 */
var childProcess = require('child_process');
var debug = require('debug')('cpdf');
var os = require('os');
var path = require('path');
var Q = require('q');

var cpdfBinPaths = {
  linux: path.join(__dirname, '../bin/cpdf-linux-64'),
  darwin: path.join(__dirname, '../bin/cpdf-mac')
};

var cpdfBinPath = cpdfBinPaths[os.platform()];

function cpdf(action, args) {
  var command = cpdfBinPath + ' ' + args;
  debug(action + ' with command ' + command);

  return Q.nfcall(childProcess.exec, command);
}

module.exports = cpdf;