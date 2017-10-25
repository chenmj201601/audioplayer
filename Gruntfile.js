/**
 * Created by Charley on 2017/10/25.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';\n',
                banner: '/*! <%= pkg.name %> - <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            jsConcat: {
                src: ['src/audioplayer.js'],
                dest: 'dist/audioplayer.js'
            },
            cssConcat: {
                src: ['src/css/audioplayer.css'],
                dest: 'dist/css/audioplayer.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/audioplayer.js',
                dest: 'dist/audioplayer.min.js'
            }
        },
        cssmin: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/css/audioplayer.css',
                dest: 'dist/css/audioplayer.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};