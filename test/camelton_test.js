'use strict';

var grunt = require('grunt');

exports.camelton = {
  defaultOptions: function(test) {
    var actual = grunt.file.readJSON('./tmp/destination-default.json'),
        expected = grunt.file.readJSON('./test/expected/destination-default.json');

    test.expect(1);
    test.deepEqual(actual, expected,
      'File generated correctly with default options.');
    test.done();
  },
  sortAsc: function(test) {
    var actual = grunt.file.readJSON('./tmp/destination-sort-asc.json'),
      expected = grunt.file.readJSON('./test/expected/destination-sort-asc.json');

    test.expect(1);
    test.deepEqual(actual, expected,
      'File generated correctly with sort option "asc" on.');
    test.done();
  },
  sortDesc: function(test) {
    var actual = grunt.file.readJSON('./tmp/destination-sort-desc.json'),
      expected = grunt.file.readJSON('./test/expected/destination-sort-desc.json');

    test.expect(1);
    test.deepEqual(actual, expected,
      'File generated correctly with sort option "desc" on.');
    test.done();
  },
  prune: function(test) {
    var actual = grunt.file.readJSON('./tmp/destination-prune.json'),
      expected = grunt.file.readJSON('./test/expected/destination-prune.json');

    test.expect(1);
    test.deepEqual(actual, expected,
      'File generated correctly with option "prune" on.');
    test.done();
  }
};
