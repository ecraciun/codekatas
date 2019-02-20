"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cucumber_1 = require("cucumber");
var PlayerCharacter_1 = require("../../src/PlayerCharacter");
var MagicalItem_1 = require("../../src/MagicalItem");
var Weapon_1 = require("../../src/Weapon");
cucumber_1.Given("I'm a new player", function () {
    this.player = new PlayerCharacter_1.PlayerCharacter();
});
cucumber_1.When("I take {int} damage", function (damage) {
    this.player.hit(damage);
});
cucumber_1.Then("I should be dead", function () {
    // tslint:disable-next-line:no-unused-expression
    chai_1.expect(this.player.IsDead).to.be.true;
});
cucumber_1.Given("I have a damage resistance of {int}", function (damageResistance) {
    this.player.DamageResistance = damageResistance;
});
cucumber_1.Given("I'm an elf", function () {
    this.player.Race = "Elf";
});
cucumber_1.Then("My health should now be {int}", function (expectedHealth) {
    chai_1.expect(this.player.Health).to.be.equal(expectedHealth);
});
cucumber_1.Given("My character class is set to {CharacterClass}", function (characterClass) {
    this.player.CharacterClass = characterClass;
});
cucumber_1.When("Cast a healing spell", function () {
    this.player.castHealingSpell();
});
cucumber_1.Given("I have an Amulet with a power of {int}", function (power) {
    var magicalItem = new MagicalItem_1.MagicalItem();
    magicalItem.Name = "Amulet";
    magicalItem.Power = power;
    this.player.MagicalItems.push(magicalItem);
    this.expectedPower = power;
});
cucumber_1.When("I use a magical Amulet", function () {
    this.player.useMagicalItem("Amulet");
});
cucumber_1.Then("The Amulet power should not be reduced", function () {
    var amulet = this.player.MagicalItems.filter(function (x) { return x.Name === "Amulet"; })[0];
    chai_1.expect(amulet.Power).to.be.equal(this.expectedPower);
});
cucumber_1.Given("I last slept {int} days ago", function (days) {
    var lastSleptTicks = new Date().getTime() - days * 1000 * 3600 * 24;
    var lastSlept = new Date(lastSleptTicks);
    this.player.LastSleepTime = lastSlept;
});
cucumber_1.When("I read a restore health scroll", function () {
    this.player.readHealthScroll();
});
cucumber_1.Given("I have the following weapons", function (table) {
    var weapons = table.hashes();
    for (var i = 0; i < weapons.length; i++) {
        var weapon = new Weapon_1.Weapon();
        weapon.Name = weapons[i].name;
        weapon.Value = parseInt(weapons[i].value, undefined);
        this.player.Weapons.push(weapon);
    }
});
cucumber_1.Then("My weapons should be worth {int}", function (expectedValue) {
    chai_1.expect(this.player.getWeaponsValue()).to.be.equal(expectedValue);
});
cucumber_1.Given("I have the following magical items", function (table) {
    var magicalItems = table.hashes();
    for (var i = 0; i < magicalItems.length; i++) {
        var item = new MagicalItem_1.MagicalItem();
        item.Name = magicalItems[i].name;
        item.Value = parseInt(magicalItems[i].value, undefined);
        item.Power = parseInt(magicalItems[i].power, undefined);
        this.player.MagicalItems.push(item);
    }
});
cucumber_1.Then("My total magical power should be {int}", function (expectedPower) {
    chai_1.expect(this.player.getMagicalPower()).to.be.equal(expectedPower);
});
//# sourceMappingURL=playerCharacterSteps.js.map