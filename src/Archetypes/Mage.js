"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(_name) {
        super(_name);
        this._energyType = 'mana';
        Mage._addInstancesCounter();
    }
    static _addInstancesCounter() {
        this._instancesCount += 1;
    }
    static createdArchetypeInstances() {
        return this._instancesCount;
    }
    get energyType() {
        return this._energyType;
    }
}
Mage._instancesCount = 0;
exports.default = Mage;
