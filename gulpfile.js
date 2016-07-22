 /*
 * sublimetext-gulpfile.js
 * https://github.com/idleberg/sublimetext-gulpfile.js
 *
 * Copyright (c) 2014-2016 Jan T. Sott
 * Licensed under the MIT license.
 */

// Dependencies
var gulp = require('gulp'),
    debug = require('gulp-debug'),
    jsonlint = require('gulp-json-lint');
    ymlVal = require('gulp-yaml-validate');
    xmlVal = require('gulp-xml-validator');

// Supported files
var jsonFiles = [
    '**/*.JSON-sublime-syntax',
    '**/*.JSON-tmLanguage',
    '**/*.JSON-tmTheme',
    '**/*.sublime-build',
    '**/*.sublime-commands',
    '**/*.sublime-completions',
    '**/*.sublime-keymap',
    '**/*.sublime-macro',
    '**/*.sublime-menu',
    '**/*.sublime-settings',
    '**/*.sublime-theme',
    'messages.json'
];

var xmlFiles = [
    '**/*.plist',
    '**/*.PLIST-sublime-syntax',
    '**/*.PLIST-tmLanguage',
    '**/*.PLIST-tmTheme',
    '**/*.sublime-snippet',
    '**/*.tmCommand',
    '**/*.tmLanguage',
    '**/*.tmPreferences',
    '**/*.tmSnippet',
    '**/*.tmTheme',
    '**/*.xml',
    '*.bbcolors',
    '*.dvtcolortheme',
    '*.icls',
    '*.itermcolors',
    '*.terminal'
];

var ymlFiles = [
    '**/*.sublime-syntax',
    '**/*.YAML-tmLanguage',
    '**/*.YAML-tmTheme'
];

// Exclude node_modules
var self = '!node_modules/**/*';

// Available tasks
gulp.task('default', ['lint']);
gulp.task('lint', ['lint:json', 'lint:xml', 'lint:yml']);

// Lint JSON
gulp.task('lint:json', function(){
  return gulp.src(jsonFiles, self)
    .pipe(debug({title: 'lint:json'}))
    .pipe(jsonlint())
});

// Validate XML
gulp.task('lint:xml', function() {
  return gulp.src(xmlFiles, self)
    .pipe(debug({title: 'lint:xml'}))
    .pipe(xmlVal());
});

// Validate YAML
gulp.task('lint:yml', function() {
  return gulp.src(ymlFiles, self)
    .pipe(debug({title: 'lint:yml'}))
    .pipe(ymlVal({ safe: true }));
});
