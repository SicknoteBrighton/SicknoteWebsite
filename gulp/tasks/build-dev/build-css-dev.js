var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-css-dev', () => {
    gulpService.log('Copy all css to dev');
    gulpService.log(config.src.directory + config.global.cssDirectory);
    return gulpService.copyFiles(config.src.directory + config.global.cssDirectory + '**/*.css', config.dev.directory + config.global.cssDirectory);
});
