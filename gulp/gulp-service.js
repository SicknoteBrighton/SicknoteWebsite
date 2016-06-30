
var plugins = require('gulp-load-plugins')({lazy:true});
var gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports =
{
    log:(msg) =>
    {
        if (typeof(msg) === 'object') {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    plugins.util.log(plugins.util.colors.blue(msg[item]));
                }
            }
        } else {
            plugins.util.log(plugins.util.colors.blue(msg));
        }
    },
    compileAndCopyTs:(sourcePath, destinationPath, tsConfigFileName) =>
    {
        var tsproject = plugins.typescript.createProject(tsConfigFileName);

        return gulp
            .src(sourcePath, {base: 'src'})
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.typescript(tsproject))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(destinationPath));
    },
    compileAndCopySass:(sourcePath, detinationPath) =>
    {
        return gulp
            .src(sourcePath)
            .pipe(plugins.sass())
            .pipe(plugins.rename({suffix: '.scss'}))
            .pipe(gulp.dest(detinationPath));
    },
    compressAndCopyImages:(sourcePath, detinationPath) =>
    {
        console.log(sourcePath);
        console.log(detinationPath);
        return gulp
            .src(sourcePath, {base: 'src'})
            .pipe(plugins.print())
            //.pipe(imagemin({optimizationLevel:4})) // TODO: Balking on certain images. 
            .pipe(gulp.dest(detinationPath))
    },
    copyFiles:(sourcePath, detinationPath) =>
    {
        return gulp
             .src(sourcePath)
             .pipe(plugins.print())
             .pipe(gulp.dest(detinationPath));
    }
}