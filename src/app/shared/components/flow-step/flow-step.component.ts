import { Component, input } from '@angular/core';
import { FlowStep } from '../../../core/models/code-block.model';

@Component({
  selector: 'app-flow-step',
  standalone: true,
  templateUrl: './flow-step.component.html',
  styleUrl: './flow-step.component.scss'
})
export class FlowStepComponent {
  steps = input.required<FlowStep[]>();
}
