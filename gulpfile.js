var gulp = require('gulp');
var tsc = require('gulp-typescript');
var inlineNg2Template = require('gulp-inline-ng2-template');
var Config = require('./gulpfile.config');
var config = new Config();
var clean = require('gulp-clean');
var del = require('del');
var webpack = require("webpack-stream");

gulp.task('clean', function () {
    var tsGeneratedFiles = [
        'src/lib/local-storage.service.d.ts',
        'src/lib/local-storage.service.js',
        'src/lib/index.d.ts',
        'src/lib/index.js'
    ];

    return gulp.src(tsGeneratedFiles, { read: false })
        .pipe(clean());
});

gulp.task('compile', ['clean'], function () {
    var sourceTsFiles = [
        './src/lib/src/local-storage.service.ts',
        './src/lib/src/index.ts',
        config.libraryTypeScriptDefinitions
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(tsc(config.tsConfig));

    tsResult.dts.pipe(gulp.dest('./src/lib'));
    return tsResult.js
                    .pipe(gulp.dest('./src/lib'));
});

gulp.task('watch', function () {
    gulp.watch(
        [
            './src/lib/src/local-storage.service.ts',
            './src/lib/src/index.ts',
        ],
        ['clean','compile']);
});

gulp.task('default', ['clean', 'compile', 'watch']);


