const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');


const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const order = require("gulp-order");
const browsersync = require('browser-sync').create();

const paths = {
    scssPath: 'app/scss/**/*.scss',
    scssPathStyle: 'app/scss/style.scss',
    jsPath: 'app/js/**/*.js',
    htmlPath: '*.html'
};


function scssTask() {
    return src(paths.scssPathStyle, {
            sourcemaps: true
        })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist', {
            sourcemaps: '.'
        }));
}


function jsTask() {
    return src(paths.jsPath, {
            sourcemaps: true
        })
        .pipe(order(['app/js/**/Result.js', 'app/js/**/Wallet.js', 'app/js/**/Statistics.js', 'app/js/**/FruitRandomizer.js', 'app/js/**/Renderer.js', 'app/js/**/Game.js', 'app/js/**/main.js' ], {
            base: './'
        }))
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(dest('dist', {
            sourcemaps: '.'
        }));
}


function browserSyncServer(cb) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    cb();
}

function browserSyncReload(cb) {
    browsersync.reload();
    cb();
}


function watchTask() {
    watch(paths.htmlPath, browserSyncReload);
    watch(
        [paths.jsPath, paths.scssPath], {
            interval: 1000,
            usePolling: true
        }, //docker
        series(parallel(scssTask, jsTask), browserSyncReload)
    );
}

// Default Gulp Task
exports.default = series(parallel(scssTask, jsTask), browserSyncServer, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask);