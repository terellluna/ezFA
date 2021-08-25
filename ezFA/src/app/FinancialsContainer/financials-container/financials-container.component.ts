import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/Models/stock.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-financials-container',
  templateUrl: './financials-container.component.html',
  styleUrls: ['./financials-container.component.css']
})
export class FinancialsContainerComponent implements OnInit {

  symbol = 'AAPL';
  stockList: Stock[];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getStockList().subscribe(data => {
      //console.log(data)
      this.stockList = data;
      this.stockList = [...this.stockList]
      console.log(this.stockList[0]);
    })
  }

  research(){
    this.symbol = (<HTMLInputElement>document.getElementById("ticker")).value;
    console.log(this.symbol);
  }
}
