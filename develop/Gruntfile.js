'use strict';

var base_path = '../reboot/';
var static_path = base_path + 'static/';

// Necessary because Sass will generate a sass/ directory in css/
var sass_path = static_path + 'sass/';

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        watch: {
          sass: {
            files: [static_path + 'sass/*.scss'],
            tasks: ['sass'],
            options: {
                livereload: true
            }
          },
          html: {
            files: [base_path + 'templates/**/*.html'],
            options: {
                livereload: true
            }
          }
        },
        sass: {
            dev: {
                files: [{
                    expand: true,
                    cwd: sass_path,
                    src: ['*.scss'],
                    dest: static_path + 'css',
                    ext: '.css'
                }],
                options: {
                    style: 'compact' 
                }
            }
        }
    });

    grunt.registerTask('static', ['watch'])
}
