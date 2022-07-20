"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf.addInstancesCounter();
    }
    static addInstancesCounter() {
        this._instancesCount += 1;
    }
    static createdRacesInstances() {
        return this._instancesCount;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Elf._instancesCount = 0;
exports.default = Elf;
