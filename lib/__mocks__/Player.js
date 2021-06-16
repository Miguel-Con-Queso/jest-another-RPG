const Potion = require("../Potion");

module.exports = function() {
    this.name = "Dave";
    this.health = 100;
    this.strength = 10;
    this.agility = 10;
    this.inventory = [new Potion("health"), new Potion()];
}