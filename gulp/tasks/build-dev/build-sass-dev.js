var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-sass-dev', () => {
    gulpService.log('Compile and copy all sass to dev');
    return gulpService.compileAndCopySass(config.src.applicationSass, config.dev.dest + config.global.cssDirectory)
});


