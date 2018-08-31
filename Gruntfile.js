module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );

	var conf = grunt.file.readJSON( 'extension.json' );
	grunt.initConfig( {
		banana: conf.MessagesDirs,
		jshint: {
			all: [
				'**/*.js',
				'!node_modules/**',
				'!vendor/**'
			]
		},
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**',
				'!vendor/**'
			]
		}
	} );

	grunt.registerTask( 'test', [ 'jsonlint', 'banana' ] );
	grunt.registerTask( 'default', 'test' );
};
