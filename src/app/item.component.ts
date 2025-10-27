import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "item-info",
    template: `
        <h2>Модель Терранов {{ idDisplay }}</h2>
        <img
            class="item-image"
            [src]="imageUrl"
            [alt]="'Модель ' + idDisplay"
            loading="lazy"
            style="max-width: 100%; height: auto;"
        />
    `
})
export class ItemComponent implements OnInit {

    id: number | null = null;
    idDisplay = '';
    // путь к картинке в папке assets
    imageUrl = 'assets/terran.png';

    constructor(private activateRoute: ActivatedRoute) { }

    ngOnInit(): void {
        // безопасно читаем параметр маршрута и парсим в число
        const rawId = this.activateRoute.snapshot.paramMap.get('id');
        const parsed = rawId ? Number(rawId) : NaN;
        this.id = Number.isFinite(parsed) ? parsed : null;
        this.idDisplay = this.id !== null ? String(this.id) : '';

        // если в будущем захотите загружать разные изображения на основе id,
        // можно раскомментировать и подставить нужный шаблон имени:
        // if (this.id !== null) { this.imageUrl = `assets/terran-${this.id}.png`; }
    }

}
