import { Component, input, inject } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  id = input.required<string>();
  title = input.required<string>();
  meta = input.required<string>();
  isNew = input.required<boolean>();
  isActive = input.required<boolean>();

  private readonly nav = inject(NavigationService);

  onClick(): void {
    this.nav.navigate(this.id());
  }
}
