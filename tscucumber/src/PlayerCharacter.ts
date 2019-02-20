import { MagicalItem } from "./MagicalItem";
import { Weapon } from "./Weapon";
import { CharacterClass } from "./CharacterClass";

export class PlayerCharacter {
    Health: number = 100;
    IsDead: boolean = false;
    DamageResistance: number = 0;
    Race: string = "";
    MagicalItems: MagicalItem[] = [];
    Weapons: Weapon[] = [];
    CharacterClass: CharacterClass = CharacterClass.None;
    LastSleepTime: Date = new Date();

    getMagicalPower(): number {
        return this.MagicalItems.map(m => m.Power).reduce((sum, current) => sum + current);
    }

    getWeaponsValue(): number {
        return this.Weapons.map(m => m.Value).reduce((sum, current) => sum + current);
    }

    hit(damage: number): void {
        let raceSpecificDamageResistance: number = 0;

        if (this.Race === "Elf") {
            raceSpecificDamageResistance = 20;
        }

        let totalDamageTaken: number = Math.max(damage - raceSpecificDamageResistance - this.DamageResistance, 0);

        this.Health -= totalDamageTaken;
        if (this.Health <= 0) {
            this.IsDead = true;
        }
    }

    castHealingSpell(): void {
        if(this.CharacterClass === CharacterClass.Healer) {
            this.Health = 100;
        } else {
            this.Health += 10;
        }
    }

    readHealthScroll(): void {
        var diff: number = Math.abs(new Date().getTime() -  this.LastSleepTime.getTime());
        let daysSinceLastSleep: number = Math.ceil(diff / (1000 * 3600 * 24));

        if(daysSinceLastSleep <= 2) {
            this.Health = 100;
        }
    }

    useMagicalItem(itemName: string): void {
        let powerReduction: number = 10;
        if(this.Race === "Elf") {
            powerReduction = 0;
        }
        let itemToReduce: MagicalItem = this.MagicalItems.filter(x => x.Name === itemName)[0];
        itemToReduce.Power -= powerReduction;
    }
}