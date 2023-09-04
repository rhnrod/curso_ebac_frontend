module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: {
                    'build/styles/main.css' : 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'build/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        },
        replace: {
            build: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        },
                        {
                            match: 'ENDERECO_DO_LOGO',
                            replacement: '../src/imgs/logo-grunt.png'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'build/'
                    }
                ]
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:build']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:build']
            },
            scripts: {
                files: ['src/scripts/main.js'],
                tasks: ['uglify']
            }
        }

    })

    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less','replace', 'uglify'])
}
