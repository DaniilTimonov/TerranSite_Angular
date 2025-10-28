import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Sc2ModalComponent } from "./components/sc2-modal.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { BuildsComponent } from "./components/builds/builds.component";
import { UnitsComponent } from "./components/units/units.component";
import { MatchupGuideComponent } from "./components/matchup-guide/matchup-guide.component";
import { ReplayViewerComponent } from "./components/replay-viewer/replay-viewer.component";
// Add more tool components here as needed

@Component({
    selector: "item-info",
    standalone: true,
    imports: [CommonModule, RouterModule, Sc2ModalComponent, OverviewComponent, BuildsComponent, UnitsComponent, MatchupGuideComponent, ReplayViewerComponent],
    template: `
        <div class="item-wrapper">
            <div class="side-block left" role="region" aria-label="Left side block">
                <div class="side-header">Функции</div>
                <nav class="side-list" aria-label="Left functions">
                    <button class="terran-btn side-item" type="button" (click)="openModal('overview')">Обзор</button>
                    <button class="terran-btn side-item" type="button" (click)="openModal('builds')">Билды</button>
                    <button class="terran-btn side-item" type="button" (click)="openModal('units')">Юниты</button>
                </nav>
            </div>

            <div class="item-row">
                <div class="item-center">
                    <h2>Модель Терранов {{ idDisplay }}</h2>
                    <img
                        class="item-image"
                        [src]="imageUrl"
                        [alt]="'Модель ' + idDisplay"
                        loading="lazy"
                    />
                    <div class="content-container">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>

            <div class="side-block right" role="region" aria-label="Right side block">
                <div class="side-header">Инструменты</div>
                <nav class="side-list" aria-label="Right tools">
                    <button class="terran-btn side-item" type="button" (click)="openModal('matchup-guide')">Гайд по матчапам</button>
                    <button class="terran-btn side-item" type="button" (click)="openModal('replay-viewer')">Просмотр реплеев</button>
                    <!-- Add more tool buttons here, e.g. <button ... (click)="openModal('toolX')">Tool X</button> -->
                </nav>
            </div>

            <sc2-modal *ngIf="modalOpen" (close)="closeModal()">
                <ng-container [ngSwitch]="modalType">
                    <app-overview *ngSwitchCase="'overview'"></app-overview>
                    <app-builds *ngSwitchCase="'builds'"></app-builds>
                    <app-units *ngSwitchCase="'units'"></app-units>
                    <app-matchup-guide *ngSwitchCase="'matchup-guide'"></app-matchup-guide>
                    <app-replay-viewer *ngSwitchCase="'replay-viewer'"></app-replay-viewer>
                </ng-container>
            </sc2-modal>
        </div>
    `
})
export class ItemComponent implements OnInit {
    id: number | null = null;
    idDisplay = '';
    imageUrl = 'assets/terran.png';

    modalOpen = false;
    modalType: string | null = null;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const rawId = this.activateRoute.snapshot.paramMap.get('id');
        const parsed = rawId ? Number(rawId) : NaN;
        this.id = Number.isFinite(parsed) ? parsed : null;
        this.idDisplay = this.id !== null ? String(this.id) : '';
    }

    navigateTo(route: string): void {
        this.router.navigate([`item/${this.id}/${route}`]);
    }

    openModal(type: string) {
        this.modalType = type;
        this.modalOpen = true;
    }

    closeModal() {
        this.modalOpen = false;
        this.modalType = null;
    }
}
