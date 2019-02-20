import { expect } from "chai";
import { Given, When, Then, TableDefinition } from "cucumber";
import { PlayerCharacter } from "../../src/PlayerCharacter";
import { CharacterClass } from "../../src/CharacterClass";
import { MagicalItem } from "../../src/MagicalItem";
import { Weapon } from "../../src/Weapon";

Given("I'm a new player", function(): void {
    this.player = new PlayerCharacter();
});

When("I take {int} damage", function(damage: number): void {
    this.player.hit(damage);
});

Then("I should be dead", function(): void {
    // tslint:disable-next-line:no-unused-expression
    expect(this.player.IsDead).to.be.true;
});

Given("I have a damage resistance of {int}", function(damageResistance: number): void {
    this.player.DamageResistance = damageResistance;
});

Given("I'm an elf", function(): void {
    this.player.Race = "Elf";
});

Then("My health should now be {int}", function(expectedHealth: number): void {
    expect(this.player.Health).to.be.equal(expectedHealth);
});

Given("My character class is set to {CharacterClass}", function(characterClass: CharacterClass): void {
    this.player.CharacterClass = characterClass;
});

When("Cast a healing spell", function(): void {
    this.player.castHealingSpell();
});

Given("I have an Amulet with a power of {int}", function(power: number): void {
    let magicalItem: MagicalItem = new MagicalItem();
    magicalItem.Name = "Amulet";
    magicalItem.Power = power;
    this.player.MagicalItems.push(magicalItem);
    this.expectedPower = power;
});

When("I use a magical Amulet", function(): void {
    this.player.useMagicalItem("Amulet");
});

Then("The Amulet power should not be reduced", function(): void {
    let amulet: MagicalItem = this.player.MagicalItems.filter(x => x.Name === "Amulet")[0];
    expect(amulet.Power).to.be.equal(this.expectedPower);
});

Given("I last slept {int} days ago", function(days: number): void {
    let lastSleptTicks: number = new Date().getTime() - days * 1000 * 3600 * 24;
    let lastSlept: Date = new Date(lastSleptTicks);
    this.player.LastSleepTime = lastSlept;
});

When("I read a restore health scroll", function(): void {
    this.player.readHealthScroll();
});

Given("I have the following weapons", function(table: TableDefinition): void {
    var weapons: any = table.hashes();
    for(let i: number = 0; i < weapons.length; i++) {
        let weapon: Weapon = new Weapon();
        weapon.Name = weapons[i].name;
        weapon.Value = parseInt(weapons[i].value, undefined);
        this.player.Weapons.push(weapon);
    }
});

Then("My weapons should be worth {int}", function(expectedValue: number): void {
    expect(this.player.getWeaponsValue()).to.be.equal(expectedValue);
});

Given("I have the following magical items", function(table: TableDefinition): void {
    var magicalItems: any = table.hashes();
    for(let i: number = 0; i < magicalItems.length; i++) {
        let item: MagicalItem = new MagicalItem();
        item.Name = magicalItems[i].name;
        item.Value = parseInt(magicalItems[i].value, undefined);
        item.Power = parseInt(magicalItems[i].power, undefined);
        this.player.MagicalItems.push(item);
    }
});

Then("My total magical power should be {int}", function(expectedPower: number): void {
    expect(this.player.getMagicalPower()).to.be.equal(expectedPower);
});