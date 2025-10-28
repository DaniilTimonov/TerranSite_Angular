import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: "not-found-app",
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="not-found">
            <h2>Страница не найдена</h2>
            <p>Запрошенная страница не существует.</p>
        </div>
    `
})
export class NotFoundComponent { }
