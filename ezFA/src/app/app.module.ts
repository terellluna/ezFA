import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockService } from './StockService/stock.service';
import { FinancialsContainerComponent } from './FinancialsContainer/financials-container/financials-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
