import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-units',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="content-section">
            <h2>Юниты</h2>
            <div class="units-content">
                <p>Здесь будет представлен список всех юнитов Терранов и их характеристики.</p>
            </div>
        </div>
    `
})
export class UnitsComponent {}