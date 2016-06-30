var gulp = require('gulp');
var gulpService = require('../../gulp-service');
var config = require('../../config.json');


gulp.task('build-images-dev', ()=> {
        gulpService.log('Compressing and copy all images to dev');

        return gulpService.compressAndCopyImages(config.src.applicationImages, config.dev.directory)
});



