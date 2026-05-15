import { Component, input } from '@angular/core';

@Component({
  selector: 'app-object-card',
  standalone: true,
  templateUrl: './object-card.component.html',
  styleUrl: './object-card.component.scss'
})
export class ObjectCardComponent {
  type = input.required<string>();
  name = input.required<string>();
  description = input.required<string>();
}
