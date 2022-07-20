import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;