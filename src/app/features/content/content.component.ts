import { Component, input, inject, effect, ElementRef } from '@angular/core';
import { Development } from '../../core/models/development.model';
import { NavigationService } from '../../core/services/navigation.service';
import { WelcomePaneComponent } from './welcome-pane/welcome-pane.component';
import { DevelopmentPaneComponent } from './development-pane/development-pane.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [WelcomePaneComponent, DevelopmentPaneComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  developments = input.required<Development[]>();

  readonly nav = inject(NavigationService);
  private readonly el = inject(ElementRef);

  constructor() {
    effect(() => {
      this.nav.activeId();
      const host = this.el.nativeElement as HTMLElement;
      host.scrollTop = 0;
    });
  }

  get activeDevelopment(): Development | undefined {
    const id = this.nav.activeId();
    return this.developments().find(d => d.id === id);
  }

  get isWelcome(): boolean {
    return this.nav.activeId() === 'welcome';
  }
}
