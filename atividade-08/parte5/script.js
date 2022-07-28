const emptyObject = {};
emptyObject["spaced attribute"] = 1;
Object.defineProperty(emptyObject, 'another attribute', {value:2});
console.log(emptyObject["spaced attribute"], Object.getOwnPropertyDescriptor(emptyObject, 'another attribute'), emptyObject);