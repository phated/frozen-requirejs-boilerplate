/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    watch: {
      files: ['<config:lint.files>', 'index.html', 'gameStyles.css', 'requireConfig.js'],
      tasks: 'lint reload'
    },
    clean: {
      build: ['dist/', 'libs/']
    },
    reload: {
      port: 35729,
      liveReload: {}
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        define: true,
        require: true,
        console: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', 'lint reload server watch');

};
