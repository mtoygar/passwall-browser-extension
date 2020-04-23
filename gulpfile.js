const gulp = require('gulp');
const shell = require('gulp-shell')
const clean = require('gulp-clean');

function cleanExtensionOutDir(cb) {
  gulp.src('extension-src/out', { read: false, allowEmpty: true })
    .pipe(clean());

  cb();
}

function exportToExtensionSrc(cb) {
  gulp.src('out/**')
    .pipe(gulp.dest('extension-src/out'));

  cb();
}

exports.default = gulp.series(cleanExtensionOutDir,
  shell.task('npm run build'),
  shell.task('npm run export'),
  exportToExtensionSrc
);
