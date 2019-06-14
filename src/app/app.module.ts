import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingComponent } from './voting/voting.component';
import { PhotoPickerComponent } from './photo-picker/photo-picker.component';
import { FinalOrderComponent } from './final-order/final-order.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    PhotoPickerComponent,
    FinalOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
