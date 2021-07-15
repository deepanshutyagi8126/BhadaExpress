import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CareersComponent } from './careers/careers.component';
import { JoinDriverComponent } from './join-driver/join-driver.component';
import { JoinAssociateComponent } from './join-associate/join-associate.component';
import { JoinPartnerComponent } from './join-partner/join-partner.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurService2Component } from './our-service2/our-service2.component';
import { AppFeaturesComponent } from './app-features/app-features.component';
import { HomeModelComponent } from './home-model/home-model.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { UpcomingOrderComponent } from './upcoming-order/upcoming-order.component';
import { CompleteOrderComponent } from './complete-order/complete-order.component';
import { OfflineOrderComponent } from './offline-order/offline-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UserlistingDriverComponent } from './userlisting-driver/userlisting-driver.component';
import { UserDriverComponent } from './user-driver/user-driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { TasksComponent } from './tasks/tasks.component';
import { StickersComponent } from './stickers/stickers.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderConformationComponent } from './order-conformation/order-conformation.component';
import { Header2Component } from './header2/header2.component';
import { TranscationHistoryComponent } from './transcation-history/transcation-history.component';
import { OperatorDashComponent } from './operator-dash/operator-dash.component';
import { OperatorAacountComponent } from './operator-aacount/operator-aacount.component';
import { OperatorStickersComponent } from './operator-stickers/operator-stickers.component';
import { OperatorOrderComponent } from './operator-order/operator-order.component';
import { OperatorDriverComponent } from './operator-driver/operator-driver.component';
import { OperatorVehicleComponent } from './operator-vehicle/operator-vehicle.component';
import { OrderDetails2Component } from './order-details2/order-details2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WhyUsComponent,
    CareersComponent,
    JoinDriverComponent,
    JoinAssociateComponent,
    JoinPartnerComponent,
    OurServiceComponent,
    OurService2Component,
    AppFeaturesComponent,
    HomeModelComponent,
    MyOrderComponent,
    UpcomingOrderComponent,
    CompleteOrderComponent,
    OfflineOrderComponent,
    OrderDetailsComponent,
    DashboardComponent,
    UserListingComponent,
    AddCustomerComponent,
    UserlistingDriverComponent,
    UserDriverComponent,
    VehicleComponent,
    AddVehicleComponent,
    MyaccountComponent,
    TasksComponent,
    StickersComponent,
    OrdersComponent,
    OrderConformationComponent,
    Header2Component,
    TranscationHistoryComponent,
    OperatorDashComponent,
    OperatorAacountComponent,
    OperatorStickersComponent,
    OperatorOrderComponent,
    OperatorDriverComponent,
    OperatorVehicleComponent,
    OrderDetails2Component
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    Ng2TelInputModule,
    FormsModule,
    NgApexchartsModule,
    ChartsModule,
    NgwWowModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
