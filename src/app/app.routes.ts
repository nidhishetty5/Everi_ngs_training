import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { UserComponent } from './user/user.component';
import { AuthGardCls } from './auth.guard';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', canActivate:[AuthGardCls],component: AboutPageComponent },
    { path: 'contact', canActivate:[AuthGardCls],component: ContactPageComponent},
	//{ path: 'user/:NamVak/mobile/:MblVak', component: UserComponent
    { path: 'user/:NamVak/:mobile/:MobVak',component: UserComponent

    }]; 


    