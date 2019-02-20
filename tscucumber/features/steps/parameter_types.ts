import { defineParameterType } from "cucumber";
import { CharacterClass } from "../../src/CharacterClass";

defineParameterType({
    regexp:/None|Healer|Warrior/,
    name: "CharacterClass",
    transformer(match: keyof typeof CharacterClass): CharacterClass {
        return CharacterClass[match];
    }
});