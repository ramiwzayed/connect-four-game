import {Component, OnInit} from '@angular/core';
import {SlotComponent} from "../slot/slot.component";
import {Board} from "../../classes/board.class";
import {Player} from "../../classes/player.class";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    SlotComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  boardObject!: Board
  player1!: Player
  player2!: Player
  isWinner!: boolean

  ngOnInit(): void {
    this.boardObject = new Board()

    this.player1 = new Player(1, "Maria", true, "#9b2a91")
    this.player2 = new Player(2, "Rami", false, "#fff105")
  }

  createRange(number: number): number[] {
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  onSlotClicked(row: number, column: number): void {
    const player: Player = this.getTurnPlayer()
    this.boardObject.drop(row, column, player.id)
    this.isWinner = this.boardObject.winnerCheck(player.id)
    if (!this.isWinner) {
      this.flipTurn()
    }
  }

  getTurnPlayer(): Player {
    if (this.player1.turn) {
      return this.player1;
    } else {
      return this.player2;
    }
  }

  flipTurn(): void {
    this.player1.turn = !this.player1.turn;
    this.player2.turn = !this.player2.turn;
  }

  getColor(row: number, column: number): string {
    const slot = this.boardObject.board[row][column]

    if (!slot.isFilled) {
      return "white";
    } else {
      if (slot.playerId === this.player1.id) {
        return this.player1.color
      }

      return this.player2.color
    }
  }
}
