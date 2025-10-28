import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule],
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
