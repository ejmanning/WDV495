const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


//Gulp Top Level Functions
//gulp.task - define tasks
//gulp.src - point to files to use
//gulp.dest - points to folder to output
//gulp.watch - watches files and folders for changes

  //logs message
  gulp.task('message', function(done){
    console.log("Gulp is running")
    done();
  })

  //copy all HTML files
  gulp.task('copyHTML', function(done){
    gulp.src('*.html')
      .pipe(gulp.dest('../dist'))
      done();
  })

  //optimize images
  gulp.task('imageMin', function(done){
    gulp.src('images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('../dist/images'))
      done();
  })

  //Minify JS
  gulp.task('minify', function(done){
    gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('../dist/js'))
      done();
  })

  //compile sass
  gulp.task('sass', function(done){
    gulp.src('sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('../dist/css'))
      done();
  })

  //scripts
  gulp.task('scripts', function(done){
    gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../dist/js'))
    done();
  })


//all tasks
gulp.task('default', gulp.parallel('message', 'copyHTML', 'imageMin', 'sass', 'scripts'));

gulp.task('watch', function(done){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('images/*', ['imageMin']);
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.html', ['copyHTML']);
  done();
})
