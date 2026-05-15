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

  readonly filtered = computed(() => {
    const q = this.nav.searchQuery().toLowerCase().trim();
    const all = this.developments();
    if (!q) return all;
    return all.filter(d =>
      d.title.toLowerCase().includes(q) ||
      d.module.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q)) ||
      d.patterns.some(p => p.title.toLowerCase().includes(q))
    );
  });

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
