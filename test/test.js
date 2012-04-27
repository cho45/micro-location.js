#!/usr/bin/env node

var assert = require('assert');

var Location = require('../lib/micro-location.js').Location;

var l;

l = Location.parse('http://example.com/');
assert.equal(l.href, 'http://example.com/');
assert.equal(l.pathname, '/');

l = Location.parse('http://example.com/#baz');
assert.equal(l.href, 'http://example.com/#baz');
assert.equal(l.hash, '#baz');

l = Location.parse('http://example.com/?foo=bar');
assert.equal(l.href, 'http://example.com/?foo=bar');
assert.equal(l.pathname, '/');
assert.equal(l.search, '?foo=bar');

l = Location.parse('http://example.com/?foo=bar#baz');
assert.equal(l.href, 'http://example.com/?foo=bar#baz');
assert.equal(l.params('foo'), 'bar');

l = l.params({
	foo : 'bar',
	baz : ['aaa', 'bbb']
});
assert.equal(l.href, 'http://example.com/?foo=bar&baz=aaa&baz=bbb#baz');

l = Location.parse('//example.com/foo');
assert.equal(l.href, '//example.com/foo');

l = Location.parse('/');
assert.equal(l.href, '/');
assert.equal(l.pathname, '/');

l = l.params({ foo : 'bar' });
assert.equal(l.href, '/?foo=bar');

l = Location.parse('http://example.com/');
l.params({ foo : 'bar' });
assert.equal(l.href, 'http://example.com/');
assert.equal(l.params('foo'), null);

