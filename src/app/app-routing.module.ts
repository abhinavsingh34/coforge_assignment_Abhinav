import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { FileClaimsComponent } from './file-claims/file-claims.component';
import { HomeComponent } from './home/home.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { TechServicesComponent } from './tech-services/tech-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'claim', component: FileClaimsComponent },
  { path: 'devices', component: MyDevicesComponent },
  { path: 'techServices', component: TechServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
