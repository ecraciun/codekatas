import { Calculator } from "../../src/calculator";
import { World } from "cucumber";
import { PlayerCharacter } from "../../src/PlayerCharacter";

declare module "cucumber" {
    // tslint:disable-next-line:interface-name
    interface World {
        calculator: Calculator;
        actual: number;
        player: PlayerCharacter;
        expectedPower: number;
    }
}