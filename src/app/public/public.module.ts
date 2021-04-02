import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
