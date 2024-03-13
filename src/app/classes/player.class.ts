export class Player {
  turn!: boolean
  name!: string;
  id!: number;
  color!: string

  constructor(id: number, name: string, turn: boolean, color: string) {
    this.id = id
    this.name = name
    this.turn = turn
    this.color = color
  }
}
