import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: "" ,component:Home
    },

    {
        path: "about" ,component:About
    },

    {
        path:"**"  ,component:PageNotFound
    }
];
