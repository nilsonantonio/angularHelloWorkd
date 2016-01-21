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
                helloword: ['app/**/*.js', ]
            }
        });
    }
})();
