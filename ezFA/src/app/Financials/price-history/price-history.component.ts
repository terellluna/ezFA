import { Component, Input, OnChanges } from '@angular/core';
import { PriceData } from 'src/app/Models/price-data.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})

export class PriceHistoryComponent implements OnChanges{ 

  constructor(private stockService: StockService) {}

  ngOnChanges() {
    this.priceData = [];
    this.priceDate = [];
    this.stockGraph = [];
    this.getDailyPriceData();
  }

  @Input() symbol: string;
  priceData: PriceData[] = [];
  priceDate: PriceDate[] = [];
  stockGraph: StockGraph[] = [];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Price';
  timeline: boolean = true;
  
  getDailyPriceData(){
    this.stockService.getDailyStockPrices(this.symbol).subscribe(data => {
      //map to the data model, then map to the graph here.
      this.priceData = data.historical;
      this.priceData = [...this.priceData]
      this.priceData.forEach(data => {
        if(data!=null){
          this.priceDate.push(new PriceDate(data.date, data.close, data.low, data.high))
        }
      })
      this.priceDate.reverse()
      this.stockGraph.push(new StockGraph(this.symbol, this.priceDate))
      this.stockGraph = [...this.stockGraph];
      
    })
  }
}

export class StockGraph {
  constructor(
    public name: string,
    public series: PriceDate[]
  ){}
}

export class PriceDate {
  constructor(
    public name: string,
    public value: number,
    public min: number,
    public max: number
  ){}
}
