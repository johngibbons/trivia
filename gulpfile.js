import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import rimraf from 'rimraf';
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';
import extend from 'postcss-simple-extend';
import cssnano from 'cssnano';
import htmlReplace from 'gulp-html-replace';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import runSequence from 'run-sequence';

const PATHS = {
  bundle: 'app.js',
  srcJsx: 'src/Index.js',
  srcCss: 'src/**/*.css',
  srcImg: 'src/images/**',
  dist: 'dist',
  distJs: 'dist/js',
  distImg: 'dist/images'
};

gulp.task('clean', cb => {
  rimraf('dist', cb);
});

gulp.task('watchify', () => {
  let bundler = watchify(browserify(PATHS.srcJsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(PATHS.bundle))
      .pipe(gulp.dest(PATHS.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
    .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', () => {
  browserify(PATHS.srcJsx)
  .transform(babelify)
  .bundle()
  .pipe(source(PATHS.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(PATHS.distJs));
});

gulp.task('styles', () => {
  gulp.src(PATHS.srcCss)
  .pipe(sourcemaps.init())
  .pipe(postcss([vars, extend, nested, autoprefixer, cssnano]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(PATHS.dist))
  .pipe(reload({stream: true}));
});

gulp.task('htmlReplace', () => {
  gulp.src('index.html')
  .pipe(htmlReplace({css: 'styles/main.css', js: 'js/app.js'}))
  .pipe(gulp.dest(PATHS.dist));
});

gulp.task('images', () => {
  gulp.src(PATHS.srcImg)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use [pngquant()]
  }))
  .pipe(gulp.dest(PATHS.distImg));
});

gulp.task('lint', () => {
  gulp.src(PATHS.srcJsx)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('watchTask', () => {
  gulp.watch(PATHS.srcCss, ['styles']);
  gulp.watch(PATHS.srcJsx, ['lint']);
});

gulp.task('watch', cb => {
  runSequence('clean', ['watchTask', 'watchify', 'styles', 'lint', 'images'], cb);
});

gulp.task('build', cb => {
  process.env.NODE_ENV = 'production';
  runSequence('clean', ['browserify', 'styles', 'htmlReplace', 'images'], cb);
});
