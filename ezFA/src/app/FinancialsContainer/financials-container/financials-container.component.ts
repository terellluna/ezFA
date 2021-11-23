import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BalanceSheetComponent } from 'src/app/Financials/balance-sheet/balance-sheet.component';
import { CashFlowsComponent } from 'src/app/Financials/cash-flows/cash-flows.component';
import { IncomeStatementComponent } from 'src/app/Financials/income-statement/income-statement.component';
import { KeyRatiosComponent } from 'src/app/Financials/key-ratios/key-ratios.component';
import { Stock } from 'src/app/Models/stock.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-financials-container',
  templateUrl: './financials-container.component.html',
  styleUrls: ['./financials-container.component.css']
})
export class FinancialsContainerComponent implements OnInit {

  inputSymbol = 'AAPL';
  inputName = "Apple Corporation";
  symbol = 'AAPL';
  stockList: Stock[];
  symbols: string[];
  matches: Stock[];

  constructor(private stockService: StockService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.stockService.getStockList().subscribe(data => {
      this.stockList = data;
      this.symbols = data.symbol;
      this.stockList = [...this.stockList]
      console.log(this.stockList.find(stock => stock.symbol == this.symbol));
    })
  }

  ngOnChanges(): void{
    this.matches = this.stockList.filter(stock => stock.symbol.includes(this.inputSymbol) || stock.name.includes(this.inputSymbol));
    console.log(this.matches);
  }

  openIncStatDialog(){
    const dialogRef = this.dialog.open(IncomeStatementComponent, {
      data: {
        symbol: this.symbol
      }
    });
  }
  openBalSheetDialog(){
    const dialogRef = this.dialog.open(BalanceSheetComponent, {
      data: {
        symbol: this.symbol
      }
    });
  }
  openCashFlowDialog(){
    const dialogRef = this.dialog.open(CashFlowsComponent, {
      data: {
        symbol: this.symbol
      }
    });
  }
  
  openKeyRatiosDialog(){
    const dialogRef = this.dialog.open(KeyRatiosComponent, {
      data: {
        symbol: this.symbol
      }
    })
  }

  research(){
    this.symbol = (<HTMLInputElement>document.getElementById("ticker")).value
  } 

  //currently have list and a bar to search shit from
  //need to display list of matches below search bar while the search bar is selected
  //need a way to refine the search for every letter entered.... [input]???
  //when a new letter is entered, call a refine function to reduce number of elements in the list
  //wait for 2 seconds of no typing before refining search so that refine calls aren't made too frequently from key inputs
  //after a refine function is executed update the displayed list with the new results
  //allow results from list to be selected and searched
  //done

  refine(){
    this.stockList.forEach(stock => {
      if(stock.symbol.toUpperCase().includes(this.inputSymbol.toUpperCase())){

      }
    })
  }
}
