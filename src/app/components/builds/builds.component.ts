import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-builds',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="content-section">
            <h2>Билды</h2>
            <div class="builds-content">
                <p>Здесь будут представлены различные стратегии и порядки строительства.</p>
            </div>
        </div>
    `
})
export class BuildsComponent {}
