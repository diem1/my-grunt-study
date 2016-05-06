module.exports = function(grunt) {

  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'js/some.js': 'coffee/some.coffee', // 1:1 compile
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['coffee']);

};
