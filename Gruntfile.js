/*
 * angular-qrcode
 * https://github.com/vs-zhang/angular-qrcode.gitt
 *
 * Copyright (c) 2015 vs-zhang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var _config = {
    srcPath   : 'src/',
    buildPath : 'build/'
  }

  grunt.initConfig({
    cfg: _config,
    uglify: {
      dev: {
        files: {
          '<%= cfg.buildPath %>angular-qrcode.min.js': ['<%= cfg.srcPath %>*.js']
        }
      }
    },
    watch: {
      all: {
        files: ['<%= cfg.srcPath %>*.js',],
        tasks: ['uglify:dev']
      }
    }
  });

  // 任务加载
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 自定义任务
  grunt.registerTask('default', ['uglify:dev']);
  grunt.registerTask('dev', ['uglify:dev','watch']);
};
