#!node

var Location = require('./location.js').Location;
var util = require('util');

var l;

l = Location.parse('http://example.com/');
console.log(l.href == 'http://example.com/');

l = Location.parse('http://example.com/#baz');
console.log(l.href == 'http://example.com/#baz');

l = Location.parse('http://example.com/?foo=bar');
console.log(l.href == 'http://example.com/?foo=bar');

l = Location.parse('http://example.com/?foo=bar#baz');
console.log(l.href == 'http://example.com/?foo=bar#baz');
console.log(l.params('foo') == 'bar');

l = l.params({
	foo : 'bar',
	baz : ['aaa', 'bbb']
});
console.log(l.href == 'http://example.com/?foo=bar&baz=aaa&baz=bbb#baz');

l = Location.parse('//example.com/foo');
console.log(l.href == '//example.com/foo');

l = Location.parse('/');
console.log(l.href == '/');
console.log(l.pathname == '/');

l = l.params({ foo : 'bar' });
console.log(l.href == '/?foo=bar');
