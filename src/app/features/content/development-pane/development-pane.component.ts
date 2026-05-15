import { Component, input } from '@angular/core';
import { Development } from '../../../core/models/development.model';
import { ObjectCardComponent } from '../../../shared/components/object-card/object-card.component';
import { PatternBlockComponent } from '../pattern-block/pattern-block.component';

@Component({
  selector: 'app-development-pane',
  standalone: true,
  imports: [ObjectCardComponent, PatternBlockComponent],
  templateUrl: './development-pane.component.html',
  styleUrl: './development-pane.component.scss'
})
export class DevelopmentPaneComponent {
  development = input.required<Development>();
}
