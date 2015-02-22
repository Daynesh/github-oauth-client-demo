var gulp = require('gulp');

gulp.task('markup', function() {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('build'));
});