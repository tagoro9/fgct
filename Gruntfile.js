/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * fgct presentation <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2013 Víctor Mora\n' +
				' */'
		},

		connect: {
			server: {
				options: {
					port: port,
					base: '.',
					keepalive: true
				}
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'connect' ] );

};
