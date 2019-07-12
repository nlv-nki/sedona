"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "0rem", // gutter width - 0px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0rem", // side fields - 0px
            maxWidth: "75rem" // 1200px
        },
        breakPoints: {
            sm: {
                width: "20rem" // 320px
            },
            md: {
                width: "48rem" // 768px
            },
            lg: {
                width: "75rem" // 1200px
            }
        }
    });
    cb();
});