var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('watch-ts-src', () => {

        return gulp.watch(config.src.applicationTypeScript).on('change',
            function(file)
            {
                gulpService.log('TS changed' + ' (' + file.path + ')');
                return gulpService.compileAndCopyTs([file.path, config.global.typeScriptDefinitions],
                config.dev.dest, config.global.tsConfigFileName);
            }
        );
    });



