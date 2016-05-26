var gulp = require('gulp');
var config = require('../../config.json');
var gulpService = require('../../gulp-service');

gulp.task('watch-html-src', () => {
        return gulp.watch([config.src.applicationHtml]).on('change',
            function(file)
            {
                gulpService.log('Html changed' + ' (' + file.path + ')');
                return gulpService.copyFiles(file.path, config.dev.dest);
            }
        );
    });

