import test from 'ava';
import m from './';

test('yard', t => {
	t.is(typeof m(1), 'object');
	t.is(m(9).cm, 822.96);
	t.is(m(7).in, 252);
	t.is(m(5).ft, 15);
});
