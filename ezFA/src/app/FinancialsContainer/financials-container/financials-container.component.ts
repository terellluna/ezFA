import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financials-container',
  templateUrl: './financials-container.component.html',
  styleUrls: ['./financials-container.component.css']
})
export class FinancialsContainerComponent implements OnInit {

  symbol = 'AAPL';
  constructor() { }

  ngOnInit(): void {
  }

  research(){
    this.symbol = (<HTMLInputElement>document.getElementById("ticker")).value;
    console.log(this.symbol);
  }
}
