var gulp = require("gulp");

//move as views para dentro da build
gulp.task("views", function () {
    return gulp.src("./src/views/**/*.ejs").pipe(gulp.dest("./build/views"));
});