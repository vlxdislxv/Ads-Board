import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AdsComponent} from './ads/ads.component';
import {AsdService} from './ads/asd.service';
import { AdComponent } from './ad/ad.component';
import {RouterModule, Routes} from '@angular/router';
import { AddAdComponent } from './add-ad/add-ad.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdInfoComponent } from './ad-info/ad-info.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    {path: 'ad', component: AdComponent},
    {path: 'ads', component: AdsComponent},
    {path: 'add-ad', component: AddAdComponent},
    {path: 'ad-info/:id', component: AdInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent, AdsComponent, AdComponent, AddAdComponent, AdInfoComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [AsdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
