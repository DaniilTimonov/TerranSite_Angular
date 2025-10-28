import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-replay-viewer',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="content-section">
            <h2>Просмотр реплеев</h2>
            <div class="replay-content">
                <p>Здесь будет функционал для просмотра и анализа реплеев.</p>
            </div>
        </div>
    `
})
export class ReplayViewerComponent {}