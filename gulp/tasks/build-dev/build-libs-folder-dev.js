var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy:true});
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-libs-directory-dev', () => {
    gulpService.log('Copy lib directory to dev  ' + config.src.directory + config.global.libDirectory + '**/*.*');
    return gulp.src(config.src.directory + config.global.libDirectory + '**/*.*',{base:'src'})
    .pipe(plugins.print())
    .pipe(gulp.dest(config.dev.dest));
});

