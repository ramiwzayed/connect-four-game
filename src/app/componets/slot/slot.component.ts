import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-slot',
  standalone: true,
  imports: [],
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss'
})
export class SlotComponent {
  @Input() color: string = 'white'
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()


}
