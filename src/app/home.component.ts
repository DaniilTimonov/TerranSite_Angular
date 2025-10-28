import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: "home-app",
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="home-content">
            <h2>Главная страница</h2>
            <div class="welcome-message">
                <p>Добро пожаловать на сайт о Терранах в StarCraft II!</p>
                <p>Здесь вы найдете всю необходимую информацию о расе Терранов, стратегиях, тактиках и многом другом.</p>
            </div>
        </div>
    `
})
export class HomeComponent { }
