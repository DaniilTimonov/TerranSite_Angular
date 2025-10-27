import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "my-app",
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    styleUrls: ['./app.css'],
    template: `
        <div class="app-shell">
            <header class="app-header">
                <div class="header-left">
                    <img class="logo" src="/assets/terran.png" alt="Terran" />
                    <h1 class="site-title">Терранская коллекция</h1>
                </div>
                <button class="hamburger" (click)="toggleMenu()" [class.is-open]="menuOpen" aria-label="Меню" [attr.aria-expanded]="menuOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="led" aria-hidden="true"></span>
                </button>

                <nav class="terran-nav" [class.open]="menuOpen">
                    <a class="terran-btn" routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="menuOpen=false">Главная</a>
                    <a class="terran-btn" routerLink="/about" routerLinkActive="active" (click)="menuOpen=false">О сайте</a>
                    <a class="terran-btn" routerLink="/item/5" routerLinkActive="active" (click)="menuOpen=false">About Terrans</a>
                </nav>
            </header>

            <main class="content">
                <div class="content-card">
                    <router-outlet></router-outlet>
                </div>
            </main>

            <footer class="app-footer">
                <div>© Ultrashot Academy — Терраны · 2025</div>
                <div class="footer-links">
                    <a routerLink="/about" class="muted-link">О проекте</a>
                </div>
            </footer>
        </div>
    `
})
export class AppComponent {
    menuOpen = false;

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
