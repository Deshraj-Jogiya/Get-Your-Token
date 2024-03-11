import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { CreateaccountComponent } from "./pages/createaccount/createaccount.component";
import { NftmarketplaceComponent } from "./pages/nft-marketplace/nft-marketplace.component";
import { UserdashboardComponent } from "./pages/user-dashboard/user-dashboard.component";
import { UsersettingsComponent } from "./pages/user-settings/user-settings.component";
import { UsernotificationsComponent } from "./pages/user-notifications/user-notifications.component";
import { UserbethistoryComponent } from "./pages/user-bet-history/user-bet-history.component";
import { UserjuryComponent } from "./pages/user-jury/user-jury.component";
import { UsertransactionsComponent } from "./pages/user-transactions/user-transactions.component";
import { UserachievementsComponent } from "./pages/user-achievements/user-achievements.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent, data: { state: 'home' } },
  { path: "register", component: RegisterpageComponent, data: { state: 'register' } },
  { path: "create", component: CreateaccountComponent, data: { state: 'create' } },
  { path: "nft-marketplace", component: NftmarketplaceComponent, data: { state: 'nft-marketplace' } },
  { path: "dashboard", component: UserdashboardComponent, data: { state: 'dashboard' } },
  { path: "settings", component: UsersettingsComponent, data: { state: 'settings' } },
  { path: "notifications", component: UsernotificationsComponent, data: { state: 'notifications' } },
  { path: "bet-history", component: UserbethistoryComponent, data: { state: 'bet-history' } },
  { path: "jury", component: UserjuryComponent, data: { state: 'jury' } },
  { path: "transactions", component: UsertransactionsComponent, data: { state: 'transactions' } },
  { path: "achievements", component: UserachievementsComponent, data: { state: 'achievements' } }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: []
})
export class AppRoutingModule {}
