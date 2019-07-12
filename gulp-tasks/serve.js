"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
    browsersync.init({
        server: "./dist/",
        port: 4000,
        notify: true
    });

    gulp.watch(paths.views.watch, gulp.parallel("views"));
    gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    gulp.watch(paths.sprites_logo.watch, gulp.parallel("sprites_logo"));
    gulp.watch(paths.sprites_form.watch, gulp.parallel("sprites_form"));
    gulp.watch(paths.sprites.watch, gulp.parallel("sprites"));
    gulp.watch(paths.webp.watch, gulp.parallel("webp"));
    gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});