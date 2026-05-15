import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DevelopmentsService } from './core/services/developments.service';
import { Development } from './core/models/development.model';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { ContentComponent } from './features/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly developmentsService = inject(DevelopmentsService);

  readonly developments = toSignal(
    this.developmentsService.getDevelopments(),
    { initialValue: [] as Development[] }
  );
}
