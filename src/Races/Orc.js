"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc.addInstancesCounter();
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
Orc._instancesCount = 0;
exports.default = Orc;
