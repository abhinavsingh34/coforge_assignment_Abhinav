import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FileClaimsComponent } from './file-claims/file-claims.component';
import { HomeComponent } from './home/home.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { TechServicesComponent } from './tech-services/tech-services.component';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';
import { ServiceOptionsComponent } from './service-options/service-options.component';
import { ServiceFulfillmentComponent } from './service-fulfillment/service-fulfillment.component';
import { SummaryComponent } from './summary/summary.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FileClaimsComponent,
    HomeComponent,
    MyDevicesComponent,
    TechServicesComponent,
    AccountComponent,
    InformationComponent,
    ServiceOptionsComponent,
    ServiceFulfillmentComponent,
    SummaryComponent,
    ClaimDetailsComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
