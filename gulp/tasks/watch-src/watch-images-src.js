var gulp = require('gulp');
var config = require('../../config.json');
var gulpService = require('../../gulp-service');
var plugins = require('gulp-load-plugins')({lazy:true});

gulp.task('watch-images-src', () => {
        return plugins.watch('src/images/**/*.{bmp|png}', (event) => {

            if (event.event === 'unlink') {
                return;
            }
            return gulpService.compressAndCopyImages(event.path, config.dev.dest);
        }
        );
});
