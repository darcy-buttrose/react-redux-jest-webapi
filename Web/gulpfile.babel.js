import gulp from 'gulp';
import typescript from 'gulp-typescript';
import {start,rebuild,kill} from 'koa-refresh/gulp';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import 'babel-polyfill';


gulp.task('compile', () => {
    return gulp.src('./app/**/*.ts*')
        .pipe(typescript(typescript.createProject('./tsconfig.json')))
        .pipe(gulp.dest('./appdist'));
});

gulp.task('start',['compile'], () => {
    gulp.src('./devScripts/server.js')
        .pipe(start({
            flags: [
                '--harmony'
            ],
            args: [
                '--nw',
                '--gulp'
            ]
        }))
        .pipe(notify({
            message: 'Server Started!'
        }));
});

process.on('exit',kill);

gulp.task('watch',['start'],() => {
    gulp.task('rebuild',['compile'],() => {
        return gulp.src('./devScripts/server.js')
            .pipe(rebuild())
            .pipe(notify({
                message: 'Server Rebuilt'
            }));
    });

    gulp.watch('./appdist/entry.jsx', {
        debounceDelay: 2000
    }, ['rebuild']);
});

