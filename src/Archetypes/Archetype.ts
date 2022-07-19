import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _cost: number = 0;
  private readonly _special: number = 0;
  constructor(private _name: string) {}

  get cost(): number {
    return this._cost;
  }

  get special(): number {
    return this._special;
  }

  get name(): string {
    return this._name;
  }

  static createArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;