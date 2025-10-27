import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: "about-app",
    template: `
        <div class="about-content">
            <h2>О сайте</h2>

                    <div class="about-card">
                                <p class="about-lead">
                                    <span class="type" aria-live="polite">{{ typed }}</span
                                    ><span class="cursor" [class.blink]="!typing" [class.solid]="typing" aria-hidden="true"></span>
                                </p>
                    </div>
        </div>
    `,
    styles: [
        `
            /* Типографика для эффекта печатной строки */
            .type {
                display: inline-block;
                white-space: pre-wrap; /* сохранять переносы и пробелы */
                font-family: 'EuropeExt', 'Orbitron', sans-serif;
                color: #ffe9c8;
                line-height: 1.55;
            }

                    /* Курсор: следует за вводимым текстом (solid при вводе, blink по завершении) */
                    .cursor {
                        display: inline-block;
                        width: 10px;
                        height: 1.1em;
                        margin-left: 6px;
                        vertical-align: bottom;
                        background: linear-gradient(180deg, #ffd07a, #ff7a2e);
                        box-shadow: 0 4px 10px rgba(255,140,40,0.12), 0 0 6px rgba(255,170,70,0.06) inset;
                        border-radius: 2px;
                        /* по умолчанию — статичный (видим и "бежит" вслед за текстом) */
                        opacity: 1;
                    }

                    .cursor.solid {
                        /* при вводе курсор не мигает, остаётся видимым */
                        animation: none;
                    }

                    .cursor.blink {
                        animation: caret-blink 1s steps(2, start) infinite;
                    }

                    @keyframes caret-blink {
                        0%, 49% { opacity: 1; }
                        50%, 100% { opacity: 0; }
                    }

            /* Немного меньше яркости для основного текста блока */
            .about-body .type {
                font-family: Inter, Arial, Helvetica, sans-serif;
                color: rgba(255,230,200,0.92);
            }
        `,
    ],
})
export class AboutComponent implements OnInit, OnDestroy {
    // Полные тексты (источник для печати)
    fullLead = `Этот сайт посвящён расе терранов — одной из трёх фракций культовой игры StarCraft 2. Здесь вы
найдёте всю информацию о терранах: подробное описание расы, стратегии, советы для новичков
и опытных игроков, характеристики юнитов и зданий, тактики против зергов и протоссов. Мы
также собираем свежие новости, обновления, гайды и лучшие реплеи за терранов.`;

    fullBody = `Проект создан для тех, кто выбирает силу, выносливость и умение адаптироваться на
поле боя. Изучайте сильные и слабые стороны терранов, совершенствуйте свой стиль игры и делитесь
опытом с другими поклонниками StarCraft 2!`;

    // Объединённый текст и отображаемая часть
    fullText = this.fullLead + "\n\n" + this.fullBody;
    typed = "";

    typing = false;

    private timers: number[] = [];

    ngOnInit(): void {
            // Печатаем единый абзац (lead + body) и показываем один курсор
            this.typing = true;
            this.startTyping(this.fullText, (val) => (this.typed = val), 20, () => {
                this.typing = false;
            });
    }

    ngOnDestroy(): void {
        this.timers.forEach((t) => clearInterval(t));
        this.timers = [];
    }

    /**
     * Небольшая вспомогательная функция для по-символьной печати текста.
     * @param full Полный текст
     * @param onUpdate Колбэк при каждом новом символе
     * @param interval Интервал между символами (ms)
     * @param onComplete Колбэк по завершении
     */
    private startTyping(
        full: string,
        onUpdate: (value: string) => void,
        interval = 30,
        onComplete?: () => void
    ) {
        let i = 0;
        // Сохраняем исходные пробелы/переносы — используем slice
        const timer = window.setInterval(() => {
            i += 1;
            onUpdate(full.slice(0, i));
            if (i >= full.length) {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, interval);
        this.timers.push(timer);
    }
}
