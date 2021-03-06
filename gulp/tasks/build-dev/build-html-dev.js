var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-html-dev', () => {
    gulpService.log('Copy all html to dev ' + config.dev.directory);
    return gulpService.copyFiles(config.src.applicationHtml, config.dev.directory);
});
