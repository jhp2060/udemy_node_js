function Dog (name, breed, color) {
    this._name = name
    this._breed = breed
    this._color = color
    this.bark = function() {return 'Woof!'}
}

Dog.prototype = {
    _name: 'aa',
    _breed: 'dog',
}