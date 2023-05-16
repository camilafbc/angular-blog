import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-under-card',
  templateUrl: './under-card.component.html',
  styleUrls: ['./under-card.component.css']
})
export class UnderCardComponent {
  @Input() under_card_photoCover: string = ""
  @Input() underCardTitle: string = ""
  @Input() Id: string = ""
}
