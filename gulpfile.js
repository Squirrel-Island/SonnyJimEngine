//include gulp
var gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    gutil       = require('gulp-util'),
    rimraf      = require('gulp-rimraf'),
    jade        = require('gulp-jade');

gulp.task('default', ['coffee-compile','template-compile','style-compile','assets-compile','browser-sync','watch']);

gulp.task('coffee-compile', function() {
    gulp.src('src/main.coffee', { read: false })
        .pipe(browserify({
            transform: ['coffeeify'],
            extensions: ['.coffee']
        }))
        .on('error', function(err) { gutil.log(err.message); })
        .pipe(uglify())
        .pipe(rename('SonnyJim.js'))
        .pipe(gulp.dest('webapp-build/js'))
        .pipe(browserSync.reload({stream:true}));
});

//pseudo template-compiler task. no real functionality yet.
gulp.task('template-compile', function() {
    gulp.src('templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('webapp-build'))
        .pipe(browserSync.reload({stream:true}))
});

//primitive style-compiler task
gulp.task('style-compile', function() {
    gulp.src(['styles/**.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('webapp-build/styles'))
        .pipe(browserSync.reload({stream:true}))
});

//rather sketchy assets-compile task
gulp.task('assets-compile', function() {
    gulp.src('assets/**')
        .pipe(gulp.dest('webapp-build/assets'))
});

gulp.task('watch', function() {
    gulp.watch(['scripts/**.coffee','modules/**.coffee', 'src/**.coffee'], ['coffee-compile'])
    gulp.watch(['templates/**/*.jade'], ['template-compile'])
    gulp.watch(['styles/**.css'], ['style-compile'])
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './webapp-build'
        }
    });
});

gulp.task('clean', function() {
    gulp.src('webapp-build', { read: false })
        .pipe(rimraf())
});