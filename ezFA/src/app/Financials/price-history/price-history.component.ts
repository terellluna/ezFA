import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})
export class PriceHistoryComponent implements OnInit {

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

  @Input() symbol: string;
  
  getDailyPriceData(){
    this.stockService.getDailyStockPrices(this.symbol).subscribe(data => {
      //map to the data model, then map to the graph here.
    })
  }
}
