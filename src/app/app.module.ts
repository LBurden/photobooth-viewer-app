import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppView } from './views/app/app.view';
import { DisplayView } from './views/display/display.view';
import { SettingsView } from './views/settings/settings.view';

@NgModule({
    declarations: [
        AppView,
        DisplayView,
        SettingsView
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppView]
})
export class AppModule {}
