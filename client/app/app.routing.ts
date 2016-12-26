import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/authGuard';
import { AcceuilComponent }   from './components/acceuil/acceuil.component';
import { HomeComponent }   from './components/home/home.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { LoginComponent }  from './components/login/login.component';
import { CreateAccountComponent }  from './components/createaccount/createaccount.component';
import { NewsComponent }  from './components/news/news.component';
import { NewsDetailComponent }  from './components/newsDetail/newsDetail.component';
import { SuggessionsComponent }  from './components/suggessions/suggessions.component';
import { SuggessionDetailComponent }  from './components/suggessionDetail/suggessionDetail.component';
import { AppartmentsComponent }  from './components/appartments/appartments.component';
import { AppartmentDetailComponent }  from './components/appartmentDetail/appartmentDetail.component';
import { FundsComponent }  from './components/funds/funds.component';


const appRoutes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent, canActivate: [AuthGuard]  },
  { path: 'suggessions', component: SuggessionsComponent  },
  { path: 'suggession/:id', component: SuggessionDetailComponent, canActivate: [AuthGuard]  },
  { path: 'appartments', component: AppartmentsComponent, canActivate: [AuthGuard]  },
  { path: 'appartment/:id', component: AppartmentDetailComponent, canActivate: [AuthGuard]  },
  { path: 'funds', component: FundsComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent  },
  { path: 'createaccount', component: CreateAccountComponent  },


  { path: 'dashboard', component: DashboardComponent  },
  { path: 'detail/:id', component: HeroDetailComponent  },
  { path: 'heroes', component: HeroesComponent  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
