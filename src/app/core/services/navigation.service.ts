import { Injectable, signal } from '@angular/core';

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
}
