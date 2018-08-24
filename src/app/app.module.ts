import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TestComponent } from './components/test/test.component';
import {TabComponent} from "./components/tabs/tab.component";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
