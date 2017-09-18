# commons-photo-url 📷

**Generate the [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) URL of a photo.**

[![npm version](https://img.shields.io/npm/v/commons-photo-url.svg)](https://www.npmjs.com/package/commons-photo-url)
[![build status](https://img.shields.io/travis/derhuerst/commons-photo-url.svg)](https://travis-ci.org/derhuerst/commons-photo-url)
[![dependency status](https://img.shields.io/david/derhuerst/commons-photo-url.svg)](https://david-dm.org/derhuerst/commons-photo-url)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/commons-photo-url.svg)](https://david-dm.org/derhuerst/commons-photo-url#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/commons-photo-url.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```
npm install commons-photo-url
```


## Usage

```
url(photo, [size])
```

```js
const url = require('commons-photo-url')

console.log(url('Hazelnuts.jpg', url.sizes.medium))
// -> https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hazelnuts.jpg/800px-Hazelnuts.jpg
```

*Note:* `url.sizes` is compatible with [`flickr-photo-url`](https://github.com/derhuerst/flickr-photo-url).


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/commons-photo-url/issues).
