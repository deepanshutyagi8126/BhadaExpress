import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CareersComponent } from './careers/careers.component';
import { JoinDriverComponent } from './join-driver/join-driver.component';
import { JoinAssociateComponent } from './join-associate/join-associate.component';
import { JoinPartnerComponent } from './join-partner/join-partner.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { AppFeaturesComponent } from './app-features/app-features.component';
import { OurService2Component } from './our-service2/our-service2.component';
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
import { TranscationHistoryComponent } from './transcation-history/transcation-history.component';
import { OperatorDashComponent } from './operator-dash/operator-dash.component';
import { OperatorAacountComponent } from './operator-aacount/operator-aacount.component';
import { OperatorStickersComponent } from './operator-stickers/operator-stickers.component';
import { OperatorOrderComponent } from './operator-order/operator-order.component';
import { OperatorDriverComponent } from './operator-driver/operator-driver.component';
import { OperatorVehicleComponent } from './operator-vehicle/operator-vehicle.component';
import { OrderDetails2Component } from './order-details2/order-details2.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'join-driver', component: JoinDriverComponent },
  { path: 'join-associate', component: JoinAssociateComponent },
  { path: 'join-partner', component: JoinPartnerComponent },
  { path: 'our-service', component: OurServiceComponent },
  { path: 'our-service2', component: OurService2Component },
  { path: 'app-features', component: AppFeaturesComponent },
  { path: 'my-order', component: MyOrderComponent },
  { path: 'upcoming-order', component: UpcomingOrderComponent },
  { path: 'complete-order', component: CompleteOrderComponent },
  { path: 'offline-order', component: OfflineOrderComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-listing', component: UserListingComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'userlisting-Operator', component: UserlistingDriverComponent },
  { path: 'user-driver', component: UserDriverComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'stickers', component: StickersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-conformation', component: OrderConformationComponent },
  { path: 'transcation-history', component: TranscationHistoryComponent },
  { path: 'operator-dash', component: OperatorDashComponent },
  { path: 'operator-aacount', component: OperatorAacountComponent },
  { path: 'operator-stickers', component: OperatorStickersComponent },
  { path: 'operator-order', component: OperatorOrderComponent },
  { path: 'operator-driver', component: OperatorDriverComponent },
  { path: 'operator-vehicle', component: OperatorVehicleComponent },
  { path: 'order-details2', component: OrderDetails2Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true,
    anchorScrolling: 'enabled',
    })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
