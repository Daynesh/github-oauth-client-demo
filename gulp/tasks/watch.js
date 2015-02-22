var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['browserify', 'browser-sync'], function() {
    gulp.watch('./app/js/**', ['jshint', 'browserify', browserSync.reload]);
    //gulp.watch('./app/scss/**', ['styles', browserSync.reload]);
    gulp.watch('./app/**.html', ['markup', browserSync.reload]);
});