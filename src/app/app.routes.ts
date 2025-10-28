import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { BuildsComponent } from './components/builds/builds.component';
import { UnitsComponent } from './components/units/units.component';
import { MatchupGuideComponent } from './components/matchup-guide/matchup-guide.component';
import { ReplayViewerComponent } from './components/replay-viewer/replay-viewer.component';
import { ItemComponent } from './item.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'item/:id',
        component: ItemComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'overview', component: OverviewComponent },
            { path: 'builds', component: BuildsComponent },
            { path: 'units', component: UnitsComponent },
            { path: 'matchup-guide', component: MatchupGuideComponent },
            { path: 'replay-viewer', component: ReplayViewerComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
];
