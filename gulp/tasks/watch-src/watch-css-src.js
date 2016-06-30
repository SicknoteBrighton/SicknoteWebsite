var gulp = require('gulp');
var config = require('../../config.json');
var gulpService = require('../../gulp-service');

gulp.task('watch-css-src', () => {
        return gulp.watch([config.src.directory + config.global.cssDirectory + '**/*.css']).on('change',
            function(file)
            {
                gulpService.log('Css changed' + ' (' + file.path + ')');
                return gulpService.copyFiles(config.src.directory + config.global.cssDirectory + '**/*.css', config.dev.directory + config.global.cssDirectory);
            }
        );
    });
