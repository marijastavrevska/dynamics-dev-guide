import { Component, input } from '@angular/core';
import { CalloutType } from '../../../core/models/callout.model';

const CLASS_MAP: Record<CalloutType, string> = {
  why: 'callout--why',
  how: 'callout--how',
  warn: 'callout--warn',
  danger: 'callout--danger',
  tip: 'callout--tip',
};

@Component({
  selector: 'app-callout',
  standalone: true,
  templateUrl: './callout.component.html',
  styleUrl: './callout.component.scss'
})
export class CalloutComponent {
  type = input.required<CalloutType>();
  title = input.required<string>();
  body = input.required<string>();

  get cssClass(): string {
    return CLASS_MAP[this.type()];
  }
}
