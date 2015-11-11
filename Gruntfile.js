var gruntLoader = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),

    jasmine: {
      eventify: {
        src: 'eventify.js',
        options: {
          specs: 'specs/eventify-test.js',
          keepRunner: true,
          outfile: 'reports/spec-runner/_SpecRunner.html',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'reports/coverage/coverage.json',
            report: [
              {
                type: 'html',
                options: {
                  dir: 'reports/coverage/html'
                }
              },
              {
                type: 'text-summary',
                options: {
                  dir: 'reports/coverage/text-summary'
                }
              },
              {
                type: 'lcov',
                options: {
                  dir: 'reports/coverage/lcov'
                }
              }
            ]
          }
        }
      }
    },
    coveralls: {
      eventify: {
        src: 'reports/coverage/lcov/lcov.info',
        options: {
          force: true
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-coveralls');

  grunt.registerTask('default', [ 'jasmine:eventify' ]);
};

module.exports = gruntLoader;