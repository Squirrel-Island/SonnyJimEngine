module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        // Watches for any changes to any CS files anywhere then runs coffee and uglify
        files: ['**/*.coffee'],
        tasks: ['coffee', 'uglify'],
        options: {
          // See contrib-watch options section, this setting makes sense
          spawn: false,
        },
      },
    },
    coffee: {
      compile: {
        files: {
          // Takes all CS files within the CS directory and compiles/concats them into JS/test.js
          'JS/test.js': 'CS/*.coffee'
        }
      }
    },
    uglify: {
      options: {
        // Does not change variable names
        mangle: false
      },
      my_target: {
        files: {
          // Takes test.js and minifies/uglifies it into test.min.js
          'JS/test.min.js': 'JS/test.js'
        }
      }
    }

  });

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "coffee" task.
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
