import { Calculator } from "../../src/calculator";
import { World } from "cucumber";

declare module "cucumber" {
    // tslint:disable-next-line:interface-name
    interface World {
        calculator: Calculator;
        actual: number;
    }
}