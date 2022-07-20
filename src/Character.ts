import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _archetype: Archetype;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _lifePoints: number;
  private _maxLifePoints: number;
  private _race: Race;
  private _strength: number;

  constructor(private _name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._archetype.energyType,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const receivedDamage = this._defense - attackPoints;

    if (receivedDamage > 0) {
      this._lifePoints -= receivedDamage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
    console.log('RECEBA');
  }

  levelUp(): void {
    this._energy.amount = 10;
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints; 
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength / getRandomInt(1, 10));
    console.log('TOME ATAQUE RANDOMICO');
  }
}

export default Character;