import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProtectedModule } from 'src/app/protected/protected/protected.module';
import { PublicModule } from 'src/app/public/public.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  imports: [
    SharedModule,
    PublicModule,
    ProtectedModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
