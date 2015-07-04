'use strict';
var test = require('ava');
var yard = require('./');

test('yard', function (t) {
	t.plan(4);

	t.assert(typeof yard(1) === 'object');
	t.assert(yard(9)['cm'] === 822.96);
	t.assert(yard(7)['in'] === 252);
	t.assert(yard(5)['ft'] === 15);
});
