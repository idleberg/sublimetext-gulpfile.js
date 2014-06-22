 /*
 * sublimetext-gulpfile.js
 * https://github.com/idleberg/sublimetext-gulpfile.js
 *
 * Copyright (c) 2014 Jan T. Sott
 * Licensed under the MIT license.
 */

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    jsonlint = require('gulp-json-lint');


gulp.task('default', ['json', 'xml']);

gulp.task('json', function(){
      gulp.src([
            '**/*.JSON-tmLanguage',
            '**/*.sublime-build',
            '**/*.sublime-commands',
            '**/*.sublime-completions',
            '**/*.sublime-keymap',
            '**/*.sublime-macro',
            '**/*.sublime-menu',
            '**/*.sublime-settings',
            '**/*.sublime-theme',
            'messages.json'
        ])
        .pipe(debug({verbose: true}))
        .pipe(jsonlint())
        .pipe(jsonlint.report('verbose'));
});

gulp.task('xml', function() {
    gulp.src([
            '**/*.plist',
            '**/*.sublime-snippet',
            '**/*.tmCommand',
            '**/*.tmLanguage',
            '**/*.tmPreferences',
            '**/*.tmSnippet',
            '**/*.tmTheme',
            '**/*.xml'
        ])
    console.log('XML linting not yet supported');
});

gulp.task('watch', function () {
   gulp.watch([
            '**/*.JSON-tmLanguage',
            '**/*.sublime-build',
            '**/*.sublime-commands',
            '**/*.sublime-completions',
            '**/*.sublime-keymap',
            '**/*.sublime-macro',
            '**/*.sublime-menu',
            '**/*.sublime-settings',
            '**/*.sublime-theme',
            'messages.json',
            '!node_modules/**/*.*'
         ],
         ['default'])
});

