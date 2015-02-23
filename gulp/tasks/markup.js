var gulp = require('gulp');

gulp.task('markup', function() {
    return gulp.src([
            './app/index.html',
            './app/views/*.html'
        ])
        .pipe(gulp.dest('build'));
});