const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));

// Static server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "index.html",
    },
  });
});

gulp.task("styles", function () {
  return gulp
    .src("sass/*.sass")
    .pipe(sass())
    .pipe(gulp.dest(css))
    .pipe(browserSync.stream());
});

gulp.task("watching", function () {
  gulp.watch("sass/*.sass", gulp.parallel("styles"));
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "sever", "styles"));
