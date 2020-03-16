'use strict';
const fs = require('fs');
const path = require('path');
const opentype = require('opentype.js');
const charPreset = require('./char-preset');
const fontPath = path.join(__dirname, '../fonts/Comismsh.ttf');

const options = {
	width: 150,
	height: 50,
	noise: 1,
	color: false,
	background: '',
	size: 4,
	ignoreChars: '',
	fontSize: 56,
	charPreset
};

const loadFont = filepath => {
	const font = opentype.loadSync(filepath);
	options.font = font;
	options.ascender = font.ascender;
	options.descender = font.descender;
};

if (fs.existsSync(fontPath)) {
	loadFont(fontPath);
}

module.exports = {
	options,
	loadFont
};
