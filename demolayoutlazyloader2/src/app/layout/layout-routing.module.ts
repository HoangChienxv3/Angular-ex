import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountModule } from "../account/account.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { FileModule } from "../file/file.module";
import { LoginModule } from "../login/login.module";
import { RegisterModule } from "../register/register.module";
import { SettingModule } from "../setting/setting.module";
import { FooterOnlyLayoutComponent } from "./footer-only-layout/footer-only-layout.component";
import { MainLayOutComponent } from "./main-lay-out/main-lay-out.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainLayOutComponent,
        children: [
            { path: 'file', loadChildren: () => FileModule },
            { path: 'account', loadChildren: () => AccountModule },
            { path: 'dashboard', loadChildren: () => DashboardModule },
            { path: 'setting', loadChildren: () => SettingModule },
        ]
    },
    {
        path: '',
        component: FooterOnlyLayoutComponent,
        children: [
            { path: 'login', loadChildren: () => LoginModule },
            { path: 'register', loadChildren: () => RegisterModule },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LayOutRoutingModule { }