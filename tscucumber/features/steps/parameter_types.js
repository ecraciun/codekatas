"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var CharacterClass_1 = require("../../src/CharacterClass");
cucumber_1.defineParameterType({
    regexp: /None|Healer|Warrior/,
    name: "CharacterClass",
    transformer: function (match) {
        return CharacterClass_1.CharacterClass[match];
    }
});
//# sourceMappingURL=parameter_types.js.map