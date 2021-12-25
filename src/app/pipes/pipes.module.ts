import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WordsToTitleCasePipe} from './words-to-title-case.pipe';
import {PascalCaseToTitleCasePipe} from './pascal-case-to-title-case.pipe';
import {ComponentNameToTitleCasePipe} from './component-name-to-title-case.pipe';

@NgModule({
    declarations: [WordsToTitleCasePipe, PascalCaseToTitleCasePipe, ComponentNameToTitleCasePipe],
    imports: [CommonModule],
    exports: [WordsToTitleCasePipe, PascalCaseToTitleCasePipe, ComponentNameToTitleCasePipe],
})
export class PipesModule {}
