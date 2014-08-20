var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    sass = require('gulp-sass'),
    haml = require('gulp-haml'),
    litmus = require('gulp-litmus');

var litmusConfig = {
  username: 'you@example.com',
  password: 'password',
  url: 'https://account.litmus.com',
  applications: [
    'applemail6',
    'gmailnew',
    'ffgmailnew',
    'chromegmailnew',
    'iphone5',
  ]
};

/**
 * Compile all SCSS files to CSS and copy to ./css and ./build/css
**/
gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('./css'))
             .pipe(gulp.dest('./build/css'));
});

/**
 * Compile HAML to HTML and copy to build/
**/
gulp.task('haml', function() {
  return gulp.src('./*.haml')
             .pipe(haml())
             .pipe(gulp.dest('./build/'));
});

/**
 * Place all CSS inline and copy html files to build/
**/
gulp.task('inline', ['sass', 'haml'], function() {
  return gulp.src('./*.html')
             .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true
             }))
             .pipe(gulp.dest('./build'));
});

/**
 * Compile all of the SASS and html
**/
gulp.task('build', ['inline']);

/**
 * Submit your tests to Litmus
**/
gulp.task('test', function() {
  return gulp.src('./build/*.html')
             .pipe(litmus(litmusConfig));
});

/**
 * Watch all changed files and perform its respective action
**/
gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./*.h*ml', ['inline']);
});
