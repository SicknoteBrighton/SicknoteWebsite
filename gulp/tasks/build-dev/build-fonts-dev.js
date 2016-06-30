var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-fonts-dev', () => {
    gulpService.log('Copy all html to dev ' + config.dev.directory);
    return gulpService.copyFiles(config.src.directory + config.global.fontsDirectory + '**/*.*', config.dev.directory + config.global.fontsDirectory);
});
