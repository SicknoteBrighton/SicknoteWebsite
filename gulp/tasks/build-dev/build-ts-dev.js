var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');

gulp.task('build-ts-dev', () => {
        gulpService.log('Compiling and moving all ts to dev');
        return gulpService.compileAndCopyTs([config.src.applicationTypeScript,config.global.typeScriptDefinitions], 
        config.dev.dest, config.global.tsConfigFileName);
    });

