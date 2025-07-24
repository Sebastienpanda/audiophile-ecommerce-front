import {Component} from '@angular/core';
import {HeroBanner} from '@features/home/components/hero-banner/hero-banner';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.scss',
    imports: [
        HeroBanner
    ]
})

export default class HomeComponent {

}
