import {Coin} from "./coin.class";

export class Player {
    coin!: Coin
    turn!: boolean
    name!: string;
    result!: string;

    constructor(name: string, turn: boolean) {
        this.name = name
        this.turn = turn
    }
}
