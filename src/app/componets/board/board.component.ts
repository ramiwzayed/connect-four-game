import {Component, OnInit} from '@angular/core';
import {SlotComponent} from "../slot/slot.component";
import {Board} from "../../classes/board.class";

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
    board!: Board

    ngOnInit(): void {
        this.board = new Board()
    }

    createRange(number: number): number[] {
        return new Array(number).fill(0)
            .map((n, index) => index + 1);
    }
}
