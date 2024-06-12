import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { PrecioComponent } from './dashboard/precio/precio.component';
import { RazasComponent } from './dashboard/razas/razas.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { CrudComponent } from './dashboard/crud/crud.component';
import { EditarComponent } from './dashboard/editar/editar.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'precioN',
        component: PrecioComponent
    },
    {
        path: 'razasN',
        component: RazasComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'crud',
        component: CrudComponent
    },
    {
        path: 'editar',
        component: EditarComponent
    },

    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
