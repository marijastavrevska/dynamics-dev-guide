import { Component, input } from '@angular/core';
import { Pattern } from '../../../core/models/pattern.model';
import { SectionLabelComponent } from '../../../shared/components/section-label/section-label.component';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';
import { CalloutComponent } from '../../../shared/components/callout/callout.component';
import { FlowStepComponent } from '../../../shared/components/flow-step/flow-step.component';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-pattern-block',
  standalone: true,
  imports: [
    SectionLabelComponent,
    CodeBlockComponent,
    CalloutComponent,
    FlowStepComponent,
    DataTableComponent,
  ],
  templateUrl: './pattern-block.component.html',
  styleUrl: './pattern-block.component.scss'
})
export class PatternBlockComponent {
  pattern = input.required<Pattern>();
}
