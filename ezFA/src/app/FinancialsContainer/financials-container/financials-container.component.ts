import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/Models/stock.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-financials-container',
  templateUrl: './financials-container.component.html',
  styleUrls: ['./financials-container.component.css']
})
export class FinancialsContainerComponent implements OnInit {

  inputSymbol = 'AAPL'
  symbol = 'AAPL';
  stockList: Stock[]
  matches: Stock[]
  searchedFlag: boolean = false;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getStockList().subscribe(data => {
      //console.log(data)
      this.stockList = data;
      this.stockList = [...this.stockList]
      console.log(this.stockList[0])
    })
  }

  research(){
    this.symbol = (<HTMLInputElement>document.getElementById("ticker")).value
    this.searchedFlag = !this.searchedFlag
    console.log(this.symbol)
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
