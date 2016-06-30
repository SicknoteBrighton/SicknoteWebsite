var gulp = require('gulp');
var config = require('../../config.json');
var gulpService = require('../../gulp-service');
var plugins = require('gulp-load-plugins')({lazy:true});

gulp.task('watch-fonts-src', () => {

    return plugins.watch(config.src.applicationFonts, (event) => {

        gulpService.log('Font added or changed ' + event.path + ', moving to dev' + config.dev.dest);
        gulpService.copyFiles(event.path, config.dev.fontsDirectory + config.global.fontsDirectory);
    });
});