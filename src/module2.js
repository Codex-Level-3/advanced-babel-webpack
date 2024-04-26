export class onePieceCharacter {
  constructor(name, bounty, devilFruit) {
    this.name = name;
    this.bounty = bounty;
    this.devilFruit = devilFruit;
  }
  increaseBounty(amount) {
    this.bounty += amount;
    return `${this.name} bounty increase! Their bounty is now ${this.bounty}!`;
  }
}
