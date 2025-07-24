import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '@core/layouts/header';

@Component({
    selector: 'app-home',
    templateUrl: './home-layout.html',
    imports: [RouterOutlet, HeaderComponent],
})

export class HomeLayout {
}
