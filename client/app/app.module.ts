import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NglModule } from 'ng-lightning/ng-lightning';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/heroDetail/hero-detail.component';
import { LoginComponent }  from './components/login/login.component';
import { CreateAccountComponent }  from './components/createaccount/createaccount.component';
import { NewsComponent }  from './components/news/news.component';
import { NewsDetailComponent }  from './components/newsDetail/newsDetail.component';
import { SuggessionsComponent }  from './components/suggessions/suggessions.component';
import { SuggessionDetailComponent }  from './components/suggessionDetail/suggessionDetail.component';
import { AppartmentsComponent }  from './components/appartments/appartments.component';
import { AppartmentDetailComponent }  from './components/appartmentDetail/appartmentDetail.component';
import { FundsComponent }  from './components/funds/funds.component';

import { HeroService } from './services/hero.service';
import { PersonService } from './services/person.service';
import { AppartmentService } from './services/appartment.service';
import { AccountService } from './services/account.service';

// Import Kendo component
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

// Custom component
import  {KendoGridComponent } from './components/shared/kendoGrid/grid.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NglModule.forRoot(),
    ButtonsModule,
    GridModule
  ],
  declarations: [
    AppComponent,
    AcceuilComponent,
    HomeComponent,
    MenuComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    LoginComponent,
    CreateAccountComponent,
    NewsComponent,
    NewsDetailComponent,
    SuggessionsComponent,
    SuggessionDetailComponent,
    AppartmentsComponent,
    AppartmentDetailComponent,
    FundsComponent,

    // custom components
    KendoGridComponent
  ],
  providers: [
    HeroService,
    PersonService,
    AppartmentService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
