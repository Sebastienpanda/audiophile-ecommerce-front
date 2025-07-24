import {Component} from '@angular/core';
import {LucideAngularModule, Menu, ShoppingCart} from 'lucide-angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrl: './header.scss',
    imports: [
        LucideAngularModule,
    ],
})
export class HeaderComponent {

    protected readonly Menu = Menu;
    protected readonly ShoppingCart = ShoppingCart;
}
