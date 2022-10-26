import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { CpipePipe } from './cpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipecompComponent,
    CpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
