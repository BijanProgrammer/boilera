import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {DarkModeModule} from '../../icons/dark-mode/dark-mode.module';
import {LightModeModule} from '../../icons/light-mode/light-mode.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule, DarkModeModule, LightModeModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
