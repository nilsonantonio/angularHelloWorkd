(function () {
    'use strict';

    module.exports = function (grunt) {

        require('load-grunt-tasks')(grunt);

        grunt.initConfig({

            jshint: {
                options: {
                    jshintrc: true
                },
                arquitetura: ['arquitetura/**/*.js'],
                helloword: ['app/**/*.js']
            },

            copy: {
                helloworld: {
                    src: [
                        '*.html',
                        'app/**',
                        'arquitetura/**'
                    ],
                    dest: 'build/'
                }
            },

            concat: {
                js: {
                    src: [
                        'build/app/js/helloworld.module.js',
                        'build/app/**/*.js',
                        'build/arquitetura/**/*.js',
                        '!build/app/**/*.controller.js'
                    ],
                    dest: 'build/source.js'
                },
                css: {
                    src: [
                        'build/app/**/*.css',
                        'build/arquitetura/**/*.css'
                    ],
                    dest: 'build/source.css'
                }
            },

            clean: {
                build: {
                    src: 'build'
                }
            },

            ngAnnotate: {
                options: {
                    singleQuotes: true
                },
                build: {
                    expand: true,
                    src: ['build/**/*.js']
                }
            },

            uglify: {
                build: {
                    expand: true,
                    src: 'build/source.js'
                }
            },

            cssmin: {
                build: {
                    expand: true,
                    src: 'build/source.css'
                }
            },

            htmlmin: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                build: {
                    expand: true,
                    src: [
                        'build/**/*.html'
                    ]
                }
            },

            autoprefixer: {
                options: {
                    remove: false
                },
                build: {
                    expand: true,
                    src: [
                        'build/source.css'
                    ]
                }
            }
        });

        grunt.registerTask('build', [
            'clean:build',
            'copy',
            'ngAnnotate',
            'concat',
            'autoprefixer',
            'uglify',
            'cssmin',
            'htmlmin'
        ]);
    };
})();
