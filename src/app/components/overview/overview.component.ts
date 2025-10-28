import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-overview',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="content-section">
            <h2>Обзор</h2>
            <div class="overview-content">
                <p>Здесь будет представлен общий обзор расы Терранов, их сильные и слабые стороны.</p>
            </div>
        </div>
    `
})
export class OverviewComponent {}