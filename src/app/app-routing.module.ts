import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayView } from './views/display/display.view';
import { SettingsView } from './views/settings/settings.view';

const routes: Routes = [
    {
        'path': '',
        'component': SettingsView
    },
    {
        'path': 'display',
        'component': DisplayView
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
