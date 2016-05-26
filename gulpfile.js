var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var plugins = require('gulp-load-plugins')({lazy:true});

requireDir( './gulp/tasks', {recurse: true});

gulp.task('build', () => {
    return runSequence('delete-dev',
              ['build-html-dev','build-images-dev',
              'build-sass-dev','build-ts-dev',
              'build-systemjs-dev',
              'build-libs-directory-dev','build-css-dev']);
});

gulp.task('watch', ['watch-html-src', 'watch-images-src',
                    'watch-sass-src', 'watch-ts-src',
                    'watch-deletes-src','watch-fonts-src']);

gulp.task('help', plugins.taskListing);
gulp.task('default', ['help']);

/*
gulp.task('src-import-libs', getTask('src-import-libs'));

gulp.task('vet', ['src-compile-typescript'], () => {
    return gulp
        .src(config.clientJs)
        .pipe(plugins.plumber())
        .pipe(plugins.print())
        .pipe(plugins.jscs())
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
});
}
*/
