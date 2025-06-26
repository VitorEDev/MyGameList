import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MypageComponent } from './mypage/mypage.component';
import { ExampleComponent } from './example/example.component';
import { MylistComponent } from './mylist/mylist.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "exemplo",
        component: ExampleComponent
    },
    {
        path: "list",
        component: MylistComponent
    }
];
