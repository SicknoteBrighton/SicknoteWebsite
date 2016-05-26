var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-systemjs-dev', () => {
    gulpService.log('Copy systemjs.config.js to dev');
    return gulpService.copyFiles(config.src.directory + config.global.systemConfigfileName, config.dev.dest);
});