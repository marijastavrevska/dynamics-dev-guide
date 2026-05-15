import { Injectable, signal, computed } from '@angular/core';
import { Development } from '../models/development.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly activeId = signal<string>('welcome');
  readonly searchQuery = signal<string>('');

  navigate(id: string): void {
    this.activeId.set(id);
  }

  setSearch(query: string): void {
    this.searchQuery.set(query);
  }

  filteredDevelopments(all: Development[]) {
    return computed(() => {
      const q = this.searchQuery().toLowerCase().trim();
      if (!q) return all;
      return all.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.module.toLowerCase().includes(q) ||
        d.tags.some(t => t.toLowerCase().includes(q)) ||
        d.patterns.some(p => p.title.toLowerCase().includes(q))
      );
    });
  }
}
