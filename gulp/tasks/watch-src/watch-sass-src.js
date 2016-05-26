var gulp = require('gulp');
var config = require('../../config.json');
var gulpService = require('../../gulp-service');

gulp.task('watch-sass-src', () => {
        return gulp.watch([config.src.applicationSass]).on('change',
            function(file)
            {
                gulpService.log('SASS changed' + ' (' + file.path + ')');
                return gulpService.compileAndCopySass(file.path, config.dev.dest + config.global.cssDirectory)
            }
        );
    });
