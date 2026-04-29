const fs = require('fs');
const PNG = require('pngjs').PNG;
const data = fs.readFileSync('test.png');
const png = PNG.sync.read(data);

// Check center pixel of the button (150, 150)
const idxCenter = (png.width * 150 + 150) << 2;
console.log('Center:', png.data[idxCenter], png.data[idxCenter+1], png.data[idxCenter+2]);

// Check pixel in the box shadow (right outside the button)
// The button is 100x100 at 100,100 -> (100-200, 100-200)
// The shadow is +20 -> (80-220, 80-220)
// Check at (210, 150)
const idxShadow = (png.width * 150 + 210) << 2;
console.log('Shadow:', png.data[idxShadow], png.data[idxShadow+1], png.data[idxShadow+2]);
