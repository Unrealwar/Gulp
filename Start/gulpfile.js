const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))
const cleanCss = require('gulp-clean-css')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const coffee = require('gulp-coffee');
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
// const gulpPug = require('gulp-pug') 
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin')
const size = require('gulp-size')
const browserSync = require('browser-sync').create()
const del = require('del')

const paths = {
    // pug: {
    //     src: 'src/*.pug',
    //     dest: 'dist/'
    // },
    styles: {
        src: ['src/styles/**/*.sass', 'src/styles/**/*.scss', 'src/styles/**/*.less'],
        dest: 'dist/css/'
    },
    scripts: {
        src: ['src/scripts/**/*.coffee','src/scripts/**/*.ts', 'src/scripts/**/*.js'],
        dest: 'dist/js/'
    },
    images: {
        src: 'src/img/**',
        dest: 'dist/img/'
    }
} 


//  Task for clean folder
function clean() {
    return del(['dist/*', '!dist/img'])
}



// Task for preproccesor Pug
// function pug() {
//     return gulp.src(paths.pug.src)
//     .pipe(gulpPug())
//     .pipe(size({
//         showFiles: true
//     }))
//     .pipe(gulp.dest(paths.pug.dest))
//     .pipe(browserSync.stream())
// }


// Task for main file CSS and JS
function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    // .pipe(less())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCss({
        level: 2 
    }))
    .pipe(rename({
        basename: 'main',
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(size({
        showFiles: true
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}
//  Task for processing styles
function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    // CoffeScript
        .pipe(coffee({bare: true}))
    // TypeScrip 
        // .pipe(ts({
        //     noImplicitAny: true,
        //     outFile: 'output.js'
        // }))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(size({
        showFiles: true
    }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}
// Task for minify PNG, JPEG, GIF and SVG images
function img() {
    return gulp.src(paths.images.src)
            .pipe(newer(paths.images.dest))
            .pipe(imagemin())
            .pipe(size({
                showFiles: true
            }))
            .pipe(gulp.dest(paths.images.dest))
}
// Task for tracking changes in task main and start live server
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }})
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
    gulp.watch(paths.images.src, img)
}

// Const build used for put task in series or parallel 
const build = gulp.series(clean, gulp.parallel(styles, scripts, img), watch)

exports.clean = clean
exports.styles = styles
exports.scripts = scripts
// exports.pug = pug
exports.watch = watch
exports.sourcemaps = sourcemaps
exports.autoprefixer = autoprefixer
exports.img = img
exports.size = size
exports.build = build
exports.default = build
