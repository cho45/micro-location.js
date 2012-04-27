Micro-Location.js
=================

Standalone location (URL) object for both browser and node.js


SYNOPSIS
--------

	var l = Location.parse('http://example.com/?foo=bar#baz');
	l.href //=> 'http://example.com/?foo=bar#baz'
	l.pathname //=> '/'
	l.search  //=> '?foo=bar'
	l.params('foo'), 'bar');


