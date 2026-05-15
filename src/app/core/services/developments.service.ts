import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';
import { Development } from '../models/development.model';

@Injectable({ providedIn: 'root' })
export class DevelopmentsService {
  private readonly http = inject(HttpClient);

  private readonly developments$: Observable<Development[]> = this.http
    .get<Development[]>('assets/data/developments.json')
    .pipe(shareReplay(1));

  getDevelopments(): Observable<Development[]> {
    return this.developments$;
  }

  getDevelopmentById(id: string): Observable<Development | undefined> {
    return this.developments$.pipe(
      map(devs => devs.find(d => d.id === id))
    );
  }
}
