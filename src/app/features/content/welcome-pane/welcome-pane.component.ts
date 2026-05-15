import { Component, input, inject } from '@angular/core';
import { Development } from '../../../core/models/development.model';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-welcome-pane',
  standalone: true,
  templateUrl: './welcome-pane.component.html',
  styleUrl: './welcome-pane.component.scss'
})
export class WelcomePaneComponent {
  developments = input.required<Development[]>();

  private readonly nav = inject(NavigationService);

  navigate(id: string): void {
    this.nav.navigate(id);
  }
}
