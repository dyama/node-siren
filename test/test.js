
var siren = siren || require('./build/Release/siren');

console.log(siren.occ_version());

// Normalize
var v1 = siren.normalize([2, 0, 0]);
var v2 = siren.normalize([0, 3, 0]);
console.log(v1);
// => [ 1, 0, 0 ]
console.log(v2);
// => [ 0, 1, 0 ]

// Cross product
var v3 = siren.cross(v1, v2);
console.log(v3);
// => [ 0, 0, 1 ]

// Dot product
var f = siren.dot(v1, v2);
console.log(f);
// => 0

// Magnitude
var m = siren.magnitude([1, 1, 0]);
console.log(m);
// => 1.4142135623730951

// Angle
var a1 = siren.angle(v1, [1, 1, 1]);
console.log(a1);
// => 0.7853981633974484

