const gulp = require('gulp');
const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const csspath = 'src/scss/*.scss';

// Compile sass into CSS & auto-inject into browsers

// function style() {
//     return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', (csspath)])
//     .pipe(sass())
//     .pipe(gulp.dest('src/css'))
//     .pipe(browserSync.stream());
// }

function style() {
    return gulp.src([(csspath)])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

// Move the javascript files into our /src/js folder

function script() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}

// Watch SCSS
function watchTask() {
  gulp.watch([csspath], { interval: 1000}, parallel(style));
}



exports.style = style;
exports.script = script;

// exports.default = function() {
//   return style()
//   .pipe(script());
// }

exports.default = series(parallel(style, script), watchTask);