module.exports = function(grunt) {

  grunt.initConfig({
    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'assets',
            src: ['**/*.jsx'],
            dest: 'assets',
            ext: '.js'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('default', ['react']);

};
