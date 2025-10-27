import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "item-info",
    template: `
        <div class="item-wrapper">


            <div class="item-row">
                <div class="item-center">
                    <h2>Модель Терранов {{ idDisplay }}</h2>
                    <img
                        class="item-image"
                        [src]="imageUrl"
                        [alt]="'Модель ' + idDisplay"
                        loading="lazy"
                    />
                </div>
            </div>


        </div>
    `,
    styles: [
        `
            :host { display:block; }
            :root { --center-width: 680px; --side-width: 160px; }

            .item-wrapper {
                position: relative;
                width: 100%;
                box-sizing: border-box;
                padding: 12px 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .item-row {
                width: 100%;
                max-width: var(--center-width);
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .item-center {
                text-align: center;
                padding: 12px 18px;
                box-sizing: border-box;
            }

            .side-block {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: var(--side-width);
                padding: 18px 12px;
                text-align: center;
                border-radius: 10px;
                box-sizing: border-box;
                pointer-events: auto;
            }

            .side-block.left {
                left: calc(50% - (var(--center-width) / 2) - var(--side-width) - 12px);
            }

            .side-block.right {
                right: calc(50% - (var(--center-width) / 2) - var(--side-width) - 12px);
            }

            .item-image { display:block; margin:0 auto; max-width:100%; height:auto; }

            @media (max-width: 920px) {
                :root { --side-width: 120px; }
                .side-block.left { left: 6px; }
                .side-block.right { right: 6px; }
            }

            @media (max-width: 640px) {
                .side-block { display:none; }
            }
        `
    ]
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

    // Side blocks are non-interactive placeholders for future functionality.

}
