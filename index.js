'use strict'

const crypto = require('crypto')

const md5 = (input) => crypto.createHash('md5').update(input).digest('hex')

const base = 'https://upload.wikimedia.org/wikipedia/commons'

const original = (file, hash) =>
	base + '/' + hash + '/' + file
// http://stackoverflow.com/questions/33689980/get-thumbnail-image-from-wikimedia-commons/33691240#33691240
const thumb = (file, hash, size) =>
	base + '/thumb/' + hash + '/' + file + '/' + size + 'px-' + file

const sizes = {
	square: 150, small: 320, medium: 800, large: 2048,
	original: 'original'
}

const url = (filename, size) => {
	let hash = md5(filename)
	hash = hash[0] + '/' + hash[0] + hash[1]
	filename = encodeURIComponent(filename)

	if ('string' === typeof size && size !== 'original') {
		if (size in sizes) return thumb(filename, hash, sizes[size])
		else throw new Error('invalid size')
	} else if ('number' === typeof size)
		return thumb(filename, hash, size)
	else return original(filename, hash)
}

module.exports = Object.assign(url, {sizes})
