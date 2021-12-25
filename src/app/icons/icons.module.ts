import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DarkModeComponent} from './dark-mode/dark-mode.component';
import {LightModeComponent} from './light-mode/light-mode.component';

@NgModule({
    declarations: [DarkModeComponent, LightModeComponent],
    imports: [CommonModule],
    exports: [DarkModeComponent, LightModeComponent],
})
export class IconsModule {}
