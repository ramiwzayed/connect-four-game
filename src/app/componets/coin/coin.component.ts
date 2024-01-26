import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-coin',
    standalone: true,
    imports: [],
    templateUrl: './coin.component.html',
    styleUrl: './coin.component.scss'
})
export class CoinComponent implements OnInit {
    @Input() color!: string

    constructor() {
    }

    ngOnInit(): void {

    }
}
