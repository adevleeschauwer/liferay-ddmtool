var nprint		= require('node-print');

var showHelp = function () {

	var helpArgs = [
		{
			arg: '--project <project-name>',
			help: 'Load a project'
		},
		{
			arg: '--server <server-name>',
			help: 'Load a server in project'
		},
		{
			arg: '-c',
			help: 'Use data from cache (and don\'t download it from server)'
		},
		{ arg: '', help: '' },
		{
			arg: '-d',
			help: 'Save all files to disk'
		},
		{ arg: '', help: '' },
		{
			arg: '-h, --help',
			help: 'Show this help'
		}
	];

	// TODO - ADD HELP HERE
	console.log();
	console.log('This app may be runned with the following arguments:');
	console.log();

	for (var x = 0; x < helpArgs.length; ++x) {
		nprint.pf('%30s   %10s', helpArgs[x].arg, helpArgs[x].help);
	}
};

module.exports = showHelp;