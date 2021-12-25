import {Injectable} from '@angular/core';
import {Theme} from '../models/theme';
import {ReplaySubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public static readonly DARK_THEME_LOCALSTORAGE_KEY = 'isDarkTheme';
    public static readonly DARK_THEME_CLASSNAME = 'theme--dark';

    public theme$ = new ReplaySubject<Theme>();

    public constructor() {
        const isDarkTheme = localStorage.getItem(ThemeService.DARK_THEME_LOCALSTORAGE_KEY);
        this.theme = !isDarkTheme || isDarkTheme === 'true' ? Theme.DARK : Theme.LIGHT;
    }

    private _theme: Theme = Theme.DARK;

    public get theme(): Theme {
        return this._theme;
    }

    public set theme(value: Theme) {
        if (value === Theme.LIGHT) {
            document.documentElement.classList.remove(ThemeService.DARK_THEME_CLASSNAME);
            localStorage.setItem(ThemeService.DARK_THEME_LOCALSTORAGE_KEY, 'false');
        } else {
            document.documentElement.classList.add(ThemeService.DARK_THEME_CLASSNAME);
            localStorage.setItem(ThemeService.DARK_THEME_LOCALSTORAGE_KEY, 'true');
        }

        this._theme = value;
        this.theme$.next(this._theme);
    }

    public toggleTheme(): void {
        if (this.theme === Theme.LIGHT) this.theme = Theme.DARK;
        else this.theme = Theme.LIGHT;
    }
}
