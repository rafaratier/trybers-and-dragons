import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addInstancesCounter();
  }

  private static addInstancesCounter() {
    this._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;