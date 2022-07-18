import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderModule} from './components/header/header.module';

import {HomeModule} from './pages/home/home.module';

import {PipesModule} from './pipes/pipes.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HeaderModule, HomeModule, PipesModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
