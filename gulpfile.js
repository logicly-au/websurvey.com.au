// npm install gulp-autoprefixer gulp-concat gulp-cssnano gulp-imagemin gulp-order gulp-rename gulp-ruby-sass gulp-sourcemaps gulp-uglify gulp-watch --save-dev
var gulp = require('gulp');

var autoprefixer    = require('gulp-autoprefixer'),
    concat          = require('gulp-concat'),
    cssnano         = require('gulp-cssnano'),
    imagemin        = require('gulp-imagemin'),
    order           = require('gulp-order'),
    rename          = require('gulp-rename'),
    sass            = require('gulp-ruby-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify          = require('gulp-uglify'),
    watch           = require('gulp-watch');

var srcCss  = allFiles('_sass', 'scss'),
    srcJs   = allFiles('js', 'js'),
    srcImg  = allFiles('img', '*');

var dstJs  = 'minjs';
var dstCss = 'css';
var dstImg = 'img';

function allFiles(root, ext)    { return root + '/**/*.' + ext }

gulp.task('styles', function() {
  // Build main.css from main.scss
  return sass('_sass/main.scss')
    .pipe(rename({basename: 'ws-main'}))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dstCss))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dstCss))
});

gulp.task('scripts', function() {
  // Build main.min.js from all js files
  return gulp.src(srcJs)
    .pipe(sourcemaps.init())
    .pipe(order(["**/jquery.min.js"]))
    .pipe(concat('ws-main.js'))
    .pipe(gulp.dest(dstJs))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dstJs))
});

gulp.task('images', function() {
  return gulp.src(srcImg)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(dstImg))
});


gulp.task('watch', function() {
  gulp.watch(srcCss, ['styles']);
  gulp.watch(srcJs,  ['scripts']);
  gulp.watch(srcImg, ['images']);
});

gulp.task('build', ['styles', 'scripts', 'images']);

gulp.task('default', ['build', 'watch']);
