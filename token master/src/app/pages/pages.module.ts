import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from "ng-apexcharts";

//Components
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GamesComponent } from "./components/games/games.component";
import { OpenbetsComponent } from "./components/openbets/openbets.component";
import { RunningbetsComponent } from "./components/runningbets/runningbets.component";
import { JudgingbetsComponent } from "./components/judgingbets/judgingbets.component";
import { ClosedbetsComponent } from "./components/closedbets/closedbets.component";
import { NftcardsComponent } from "./components/nft-cards/nft-cards.component";
import { LeveldetailsComponent } from "./components/level-details/level-details.component";
import { UserprofileleveldetailsComponent } from "./components/user-profile-level-details/user-profile-level-details.component";

import { IndexComponent } from "./index/index.component";
import { RegisterpageComponent } from "./registerpage/registerpage.component";
import { CreateaccountComponent } from "./createaccount/createaccount.component";
import { NftmarketplaceComponent } from "./nft-marketplace/nft-marketplace.component";
import { UserdashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UsersettingsComponent } from "./user-settings/user-settings.component";
import { UsernotificationsComponent } from "./user-notifications/user-notifications.component";
import { UserbethistoryComponent } from "./user-bet-history/user-bet-history.component";
import { UserjuryComponent } from "./user-jury/user-jury.component";
import { UsertransactionsComponent } from "./user-transactions/user-transactions.component";
import { UserachievementsComponent } from "./user-achievements/user-achievements.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,    
    NgApexchartsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    NgCircleProgressModule.forRoot()
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    GamesComponent,
    OpenbetsComponent,
    RunningbetsComponent,
    JudgingbetsComponent,
    ClosedbetsComponent,
    NftcardsComponent,
    IndexComponent,
    RegisterpageComponent,
    CreateaccountComponent,
    NftmarketplaceComponent,
    UserdashboardComponent,
    UsersettingsComponent,
    UsernotificationsComponent,
    UserbethistoryComponent,
    UsertransactionsComponent,
    UserachievementsComponent,
    UserjuryComponent,
    LeveldetailsComponent,
    UserprofileleveldetailsComponent
  ],
  exports: [
    IndexComponent,
    FormsModule,
    ReactiveFormsModule,
    RegisterpageComponent,
    CreateaccountComponent,
    NftmarketplaceComponent,
    UserdashboardComponent,
    UsersettingsComponent,
    UsernotificationsComponent,
    UserbethistoryComponent,
    UsertransactionsComponent,
    UserachievementsComponent,
    UserjuryComponent
  ],
  providers: []
})
export class PagesModule {}
