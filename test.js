#!/usr/bin/env node
TAP();

var Location = require('./location.js').Location;

var l;

l = Location.parse('http://example.com/');
is(l.href, 'http://example.com/');

l = Location.parse('http://example.com/#baz');
is(l.href, 'http://example.com/#baz');

l = Location.parse('http://example.com/?foo=bar');
is(l.href, 'http://example.com/?foo=bar');

l = Location.parse('http://example.com/?foo=bar#baz');
is(l.href, 'http://example.com/?foo=bar#baz');
is(l.params('foo'), 'bar');

l = l.params({
	foo : 'bar',
	baz : ['aaa', 'bbb']
});
is(l.href, 'http://example.com/?foo=bar&baz=aaa&baz=bbb#baz');

l = Location.parse('//example.com/foo');
is(l.href, '//example.com/foo');

l = Location.parse('/');
is(l.href, '/');
is(l.pathname, '/');

l = l.params({ foo : 'bar' });
is(l.href, '/?foo=bar');

l = Location.parse('http://example.com/');
l.params({ foo : 'bar' });
is(l.href, 'http://example.com/');
is(l.params('foo'), null);

done_testing();


function TAP () {
	var util = require('util');
	this.ok = function (bool, name) {
		done_testing.n++;
		var r = bool ? 'ok' : 'not ok';
		r += " " + done_testing.n;
		console.log(name ? r + " # " + name : r);
	};
	this.is = function (got, expected, name) {
		got = util.inspect(got, true, 2);
		expected = util.inspect(expected, true, 2);
		if (got === expected) {
			ok(true, name);
		} else {
			ok(false, name);
			console.log("# got:\n" + got.replace(/^/m, "# "));
			console.log("# expected:\n" + expected.replace(/^/m, "# "));
		}
	}
	this.done_testing = function () {
		var n = done_testing.n;
		console.log('1..' + n);
	}
	this.done_testing.n = 0;
}
