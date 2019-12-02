const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

gulp.task('hello', function(done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "src"
      }
  });
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('mincss', function() {
  return gulp.src("src/css/*.css")
  .pipe(rename({suffix: ".min"}))
  .pipe(cleanCSS())
  .pipe(gulp.dest("src/css"));
});