import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink/drink';

@Component({
  selector: 'app-alco-card',
  templateUrl: './alco-card.component.html',
  styleUrls: ['./alco-card.component.css']
})
export class AlcoCardComponent {
  constructor() { }

  ngOnInit(): void {
  }

  // @Input drink: Drink | null = null;
}