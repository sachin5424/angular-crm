import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './dashboard/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NotificationsComponent } from './notifications/notifications.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    SidenavComponent,
    SliderComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CarouselModule,
    MatGridListModule,
    MatCardModule,
    AngularMaterialModule,
    MatMenuModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
