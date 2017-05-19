const fs = require('fs');
const path = require('path');
var exec = require('child_process').exec;
const _ = require('lodash');
const loadCoverage = require('remap-istanbul/lib/loadCoverage');
const remap = require('remap-istanbul/lib/remap');
const writeReport = require('remap-istanbul/lib/writeReport');

const coverageFile = './coverage/js/coverage-final.json';
const updatedCoverageFile = './coverage/js/coverage-updated.json';

const isWindows = process.platform === 'win32';

const originalCoverage = fs.readFileSync(coverageFile, 'utf8');

//jest does not correctly escape path to file used as key, force replace it
const originalCoverageJson = JSON.parse(isWindows ? originalCoverage.replace(/\\/g, "\\\\") : originalCoverage);
const updateCoverageJson = {};

_.forIn(originalCoverageJson, (value, key) => {
	const updatedKey = key
		.replace(path.normalize('/src/'), path.normalize('/build/'))
		.replace('.tsx.js', '.js')
		.replace('.ts.js', '.js');

	if (updatedKey.endsWith('.js')) {
		updateCoverageJson[updatedKey] = value;
	}
});


fs.writeFileSync(updatedCoverageFile, JSON.stringify(updateCoverageJson));

const collector = remap(loadCoverage(updatedCoverageFile));
writeReport(collector, 'json', {}, './coverage/ts/coverage.json');
writeReport(collector, 'lcovonly', {}, './coverage/ts/coverage.lcov');
writeReport(collector, 'html', {}, './coverage/ts/html');


exec("open " + path.join(__dirname, 'coverage', 'ts', 'html', 'index.html'));
