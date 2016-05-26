var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-html-dev', () => {
    gulpService.log('Copy all html to dev');
    return gulpService.copyFiles(config.src.applicationHtml, config.dev.dest);
});
