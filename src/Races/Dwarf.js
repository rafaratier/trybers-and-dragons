"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 80;
        Dwarf.addInstancesCounter();
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
Dwarf._instancesCount = 0;
exports.default = Dwarf;
