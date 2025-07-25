import {Component, signal} from '@angular/core';
import {LucideAngularModule, Menu, ShoppingCart} from 'lucide-angular';
import {navigation, NavigationData} from '@core/layouts/navigation/navigation';
import {NavigationItem} from '@core/layouts/navigation/components/item';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrl: './header.scss',
    imports: [
        LucideAngularModule,
        NavigationItem,
    ],
})
export class HeaderComponent {
    protected readonly Menu = Menu;
    protected readonly ShoppingCart = ShoppingCart;

    protected readonly open = signal(true);
    protected readonly data = signal<NavigationData[]>(navigation)

    protected toggleMenu(): void {
        this.open.set(!this.open());
    }
}
