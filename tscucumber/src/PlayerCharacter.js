"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterClass_1 = require("./CharacterClass");
var PlayerCharacter = /** @class */ (function () {
    function PlayerCharacter() {
        this.Health = 100;
        this.IsDead = false;
        this.DamageResistance = 0;
        this.Race = "";
        this.MagicalItems = [];
        this.Weapons = [];
        this.CharacterClass = CharacterClass_1.CharacterClass.None;
        this.LastSleepTime = new Date();
    }
    PlayerCharacter.prototype.getMagicalPower = function () {
        return this.MagicalItems.map(function (m) { return m.Power; }).reduce(function (sum, current) { return sum + current; });
    };
    PlayerCharacter.prototype.getWeaponsValue = function () {
        return this.Weapons.map(function (m) { return m.Value; }).reduce(function (sum, current) { return sum + current; });
    };
    PlayerCharacter.prototype.hit = function (damage) {
        var raceSpecificDamageResistance = 0;
        if (this.Race === "Elf") {
            raceSpecificDamageResistance = 20;
        }
        var totalDamageTaken = Math.max(damage - raceSpecificDamageResistance - this.DamageResistance, 0);
        this.Health -= totalDamageTaken;
        if (this.Health <= 0) {
            this.IsDead = true;
        }
    };
    PlayerCharacter.prototype.castHealingSpell = function () {
        if (this.CharacterClass === CharacterClass_1.CharacterClass.Healer) {
            this.Health = 100;
        }
        else {
            this.Health += 10;
        }
    };
    PlayerCharacter.prototype.readHealthScroll = function () {
        var diff = Math.abs(new Date().getTime() - this.LastSleepTime.getTime());
        var daysSinceLastSleep = Math.ceil(diff / (1000 * 3600 * 24));
        if (daysSinceLastSleep <= 2) {
            this.Health = 100;
        }
    };
    PlayerCharacter.prototype.useMagicalItem = function (itemName) {
        var powerReduction = 10;
        if (this.Race === "Elf") {
            powerReduction = 0;
        }
        var itemToReduce = this.MagicalItems.filter(function (x) { return x.Name === itemName; })[0];
        itemToReduce.Power -= powerReduction;
    };
    return PlayerCharacter;
}());
exports.PlayerCharacter = PlayerCharacter;
//# sourceMappingURL=PlayerCharacter.js.map