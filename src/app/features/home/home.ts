import {Component} from '@angular/core';
import {HeroBanner} from '@features/home/components/hero-banner/hero-banner';
import {Category} from '@features/home/components/category/category';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.scss',
    imports: [
        HeroBanner,
        Category
    ]
})

export default class HomeComponent {

}
