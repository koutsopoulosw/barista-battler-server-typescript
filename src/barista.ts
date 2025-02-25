class baristaInstance {
  id: number;
  currentHealth: number;
  currentDmg: number;

  constructor(currentHealth = 1, currentDmg = 1) {
    this.id = Date.now();
    this.currentHealth = currentHealth;
    this.currentDmg = currentDmg;
  }
}

class baristaTeamInstance {
  id: number;
  round: number;
  baristas: baristaInstance[];

  constructor(round = 1, baristas : baristaInstance[]) {
    this.id = Date.now();
    this.round = round;
    this.baristas = baristas;
  }
}

export { baristaInstance, baristaTeamInstance }