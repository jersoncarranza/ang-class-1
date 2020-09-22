import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent  } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { HeroeComponent} from './components/heroe/heroe.component';
import { BuscadorComponent} from './components/buscador/buscador.component';

const app_routes: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscar/:termino', component: BuscadorComponent},

    {path: '**' , pathMatch: 'full', redirectTo:'home'}

]

export const app_routing = RouterModule.forRoot(app_routes);

//export const app_routing = RouterModule.forRoot(app_routes,{useHash: true});
