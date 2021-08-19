import { Component, Input, OnInit } from '@angular/core';
import { PriceData } from 'src/app/Models/price-data.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})

export class PriceHistoryComponent implements OnInit{ 

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.getDailyPriceData();
  }

  stockGraph: any = [
    {
      name: 'Stock',
      series: [{
        "name": new Date,
        "value": Number
      }
      ]
    }
  ]

  @Input() symbol: string;
  priceData: PriceData[] = [];
  priceDate: PriceDate[] = [];
  //stockGraph: StockGraph[] = [];
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

      this.priceData.forEach(data => {
        if(data!=null){
          this.stockGraph[0].series.push({"name": data.date, "value": data.close})
        }
        //this.priceDate.push(new PriceDate(data.date, data.close, data.low, data.high))
      })

      //this.stockGraph.push(new StockGraph(this.symbol, this.priceDate))

      //this.stockGraph = Object.assign({}, this.stockGraph);

      console.log(this.stockGraph);
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
