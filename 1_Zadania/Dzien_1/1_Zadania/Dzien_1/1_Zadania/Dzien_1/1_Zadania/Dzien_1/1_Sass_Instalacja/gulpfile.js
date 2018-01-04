//plug-in gulp-plumber skonfigurowac w domu
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');

//gulp.task("sass", function(e) {
//return gulp.src("scss/main.scss").pipe(sass()).pipe(gulp.dest("css"));
//

gulp.task("watch", function(e) {
  gulp.watch("scss/main.scss", ["sass"]);
});
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
});
