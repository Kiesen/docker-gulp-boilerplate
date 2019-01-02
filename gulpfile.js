var gulp        = require('gulp');
var sass        = require('gulp-sass');
var clean       = require('gulp-clean');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var browserSync = require('browser-sync');

// Define the public output path
var publicOutputPath = 'public/';
var assetsOutputPath = publicOutputPath + 'asstes/';

// Concat and minify scripts
gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(assetsOutputPath + 'js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(assetsOutputPath + 'js'))
    .pipe(browserSync.stream());
});

// Compile sass and minify css 
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.{sass,scss}')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ basename: 'style', suffix: '.min' }))
    .pipe(gulp.dest(assetsOutputPath + 'css'))
    .pipe(browserSync.stream());
});

// Copy html to public
gulp.task('html', function() {
  return gulp.src('src/templates/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.stream());
});

// Clean up  
gulp.task('clean', function() {
  return gulp.src(
    [
      assetsOutputPath + 'css', 
      assetsOutputPath + 'js'
    ],
    {
      read: false,
      allowEmpty: true
    }
  )
  .pipe(clean())
});

// Watch files for changes  
gulp.task('watch', function() {
  gulp.watch("src/**/*.scss", gulp.series('sass'));
  gulp.watch("src/**/*.html", gulp.series('html'));
  gulp.watch("src/**/*.js", gulp.series('js'));
});

// Default task
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
      'html',
      'sass',
      'js'
    )
  )
);

// Browser sync and serve tasks 
gulp.task('watch',  gulp.series(
    'clean',
    gulp.parallel(
      'html',
      'sass',
      'js',
      'watch',
      function() {
        browserSync.init({
          server: "./public",
          port: 4000
        });
      }
    )
  )
)