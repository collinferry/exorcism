export const abilityModifier = (num) => {

  if (num < 3) {
    throw new Error('Ability scores must be at least 3');
  } else if (num > 18) {
    throw new Error('Ability scores can be at most 18');
  } else {
    return Math.floor((num - 10) / 2);
  }
};

export class Character {

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = abilityModifier(this.constitution) + 10;
  }

  static rollAbility() {
    const sumArray = (a, b) => a + b;
    var rolls = [];

    while (rolls.length <= 3) {
      rolls.push(Math.floor(Math.random() * Math.floor(6)) + 1);
    }
    rolls.sort().shift();
    return rolls.reduce(sumArray);
  }



}
