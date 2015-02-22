var gulp        = require('gulp');
var concat      = require('gulp-concat');
var browserify  = require('gulp-browserify');

gulp.task('browserify', ['jshint'], function() {
    gulp.src(['./app/js/app.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: false
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('build/js'));
});