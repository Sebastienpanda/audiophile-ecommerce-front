import type {Routes} from '@angular/router';
import {HomeLayout} from './home-layout';

const routes: Routes = [
    {
        path: '',
        component: HomeLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('@features/home/home'),
            },
        ],
    },
];

export default routes;
