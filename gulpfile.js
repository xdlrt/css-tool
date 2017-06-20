var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('uglify', function () {
    // js文件
    gulp.src('./css-tool.js')
        .pipe(uglify())
        .pipe(rename('./css-tool.min.js'))
        .pipe(gulp.dest('./'));
});
