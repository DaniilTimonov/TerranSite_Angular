import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-matchup-guide',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="content-section">
            <h2>Гайд по матчапам</h2>
            <div class="matchup-content">
                <p>Здесь будут представлены стратегии игры против разных рас.</p>
            </div>
        </div>
    `
})
export class MatchupGuideComponent {}
