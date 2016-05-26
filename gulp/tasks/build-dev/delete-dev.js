
var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');
var del = require('del');

gulp.task('delete-dev', () =>
{
    gulpService.log('Deleting dev build: ' + config.dev.dest);
    return del(config.dev.dest);
})
