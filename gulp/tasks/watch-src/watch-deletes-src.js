var gulp = require('gulp');
var config = require('../../config.json');
var gulpService = require('../../gulp-service');
var plugins = require('gulp-load-plugins')({lazy:true});
var del = require('del');
var path = require('path');

gulp.task('watch-deletes-src', () => {

    return plugins.watch(config.src.applicationFiles, (event) => {

        var pathOnDev = config.dev.dest + path.relative(config.global.sourceDirectory, event.path);

        if (event.event === 'unlink') {
            gulpService.log('Deleting file ' + event.path + ' from dev');
            return del(pathOnDev);
        }
    });
});

