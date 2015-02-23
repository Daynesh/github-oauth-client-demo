var gulp    = require('gulp');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');

gulp.task('styles', function() {
    return gulp.src('./app/scss/main.scss')
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./build/css'));
});