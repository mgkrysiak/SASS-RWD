//plug-in gulp-plumber skonfigurowac w domu
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber');

gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));

gulp.task("watch", function(e) {
  gulp.watch("sass/main.scss", ["sass"]);
});
gulp.task("watch", function(e) {
  gulp.watch("sass/main.scss", ["sass"]);
});
gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compact'
  }).on('error', sass.logError))
  .pipe(plumber())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
});
