import { Component, input, inject, computed } from '@angular/core';
import { Development } from '../../core/models/development.model';
import { NavigationService } from '../../core/services/navigation.service';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  developments = input.required<Development[]>();

  readonly nav = inject(NavigationService);

  readonly filtered = computed(() =>
    this.nav.filteredDevelopments(this.developments())()
  );

  onSearch(event: Event): void {
    this.nav.setSearch((event.target as HTMLInputElement).value);
  }

  isActive(id: string): boolean {
    return this.nav.activeId() === id;
  }

  metaFor(dev: Development): string {
    return `${dev.date} · ${dev.module}`;
  }

  isNew(dev: Development): boolean {
    const devDate = new Date(dev.date);
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 14);
    return devDate >= cutoff;
  }
}
