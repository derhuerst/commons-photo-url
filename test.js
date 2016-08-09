'use strict'

const test = require('tape')
const url  = require('./index')

const base = 'https://upload.wikimedia.org/wikipedia/commons/'



test('Walnuts.jpg', (t) => {
	t.plan(1)
	const expected = base + '6/63/Walnuts.jpg'
	t.equal(url('Walnuts.jpg'), expected)
})

test('Hazelnuts.jpg', (t) => {
	t.plan(1)
	const expected = base + '3/3f/Hazelnuts.jpg'
	t.equal(url('Hazelnuts.jpg'), expected)
})

test('Hazelnuts.jpg original', (t) => {
	t.plan(2)
	const expected = base + '3/3f/Hazelnuts.jpg'
	t.equal(url('Hazelnuts.jpg', 'original'), expected)
	t.equal(url('Hazelnuts.jpg', url.sizes.original), expected)
})

test('Hazelnuts.jpg large', (t) => {
	t.plan(3)
	const expected = base + 'thumb/3/3f/Hazelnuts.jpg/2048px-Hazelnuts.jpg'
	t.equal(url('Hazelnuts.jpg', 2048), expected)
	t.equal(url('Hazelnuts.jpg', url.sizes.large), expected)
	t.equal(url('Hazelnuts.jpg', 'large'), expected)
})

test('Hazelnuts.jpg medium', (t) => {
	t.plan(3)
	const expected = base + 'thumb/3/3f/Hazelnuts.jpg/800px-Hazelnuts.jpg'
	t.equal(url('Hazelnuts.jpg', 800), expected)
	t.equal(url('Hazelnuts.jpg', url.sizes.medium), expected)
	t.equal(url('Hazelnuts.jpg', 'medium'), expected)
})

test('Hazelnuts.jpg small', (t) => {
	t.plan(3)
	const expected = base + 'thumb/3/3f/Hazelnuts.jpg/320px-Hazelnuts.jpg'
	t.equal(url('Hazelnuts.jpg', 320), expected)
	t.equal(url('Hazelnuts.jpg', url.sizes.small), expected)
	t.equal(url('Hazelnuts.jpg', 'small'), expected)
})

test('Hazelnuts.jpg square', (t) => {
	t.plan(3)
	const expected = base + 'thumb/3/3f/Hazelnuts.jpg/150px-Hazelnuts.jpg'
	t.equal(url('Hazelnuts.jpg', 150), expected)
	t.equal(url('Hazelnuts.jpg', url.sizes.square), expected)
	t.equal(url('Hazelnuts.jpg', 'square'), expected)
})
