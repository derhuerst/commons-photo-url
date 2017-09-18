'use strict'

const crypto = require('crypto')

const md5 = (input) => crypto.createHash('md5').update(input).digest('hex')

const base = 'https://upload.wikimedia.org/wikipedia/commons/'
const enc = encodeURIComponent

const original = (ns, slugified) => {
	return base + ns + '/' + enc(slugified)
}

// http://stackoverflow.com/questions/33689980/get-thumbnail-image-from-wikimedia-commons/33691240#33691240
const thumb = (ns, slugified, size) => {
	const encoded = enc(slugified)
	return base + `thumb/${ns}/${encoded}/${size}px-${encoded}`
}

const sizes = {
	square: 150, small: 320, medium: 800, large: 2048,
	original: 'original'
}

const url = (filename, size) => {
	// todo: https://en.wikipedia.org/wiki/Wikipedia:Page_name#Spaces.2C_underscores_and_character_coding
	// todo: merge with build-wikipedia-feed/lib/slugify
	const slugified = filename.replace(/\s+/g, '_')
	const hash = md5(slugified)
	const ns = hash[0] + '/' + hash[0] + hash[1]

	if ('string' === typeof size && size !== 'original') {
		if (!(size in sizes)) throw new Error('invalid size')
		return thumb(ns, slugified, sizes[size])
	}
	if ('number' === typeof size) return thumb(ns, slugified, size)
	return original(ns, slugified)
}

module.exports = Object.assign(url, {sizes})
