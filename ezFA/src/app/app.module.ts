import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StockService } from './StockService/stock.service';
import { FinancialsContainerComponent } from './FinancialsContainer/financials-container/financials-container.component';
import { IncomeStatementComponent } from './Financials/income-statement/income-statement.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BalanceSheetComponent } from './Financials/balance-sheet/balance-sheet.component';
import { CashFlowsComponent } from './Financials/cash-flows/cash-flows.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PriceHistoryComponent } from './Financials/price-history/price-history.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialsContainerComponent,
    IncomeStatementComponent,
    BalanceSheetComponent,
    CashFlowsComponent,
    PriceHistoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
